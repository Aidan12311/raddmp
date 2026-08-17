use lambda_http::{Body, Error, Request, RequestPayloadExt, Response};
use crate::helpers::{create_dynamo_client, create_jwt, hash, text_response};
use crate::models::{RequestBody, User};
use lambda_http::http::header::{HeaderValue, SET_COOKIE};
use aws_sdk_dynamodb::types::AttributeValue;
use serde_dynamo::from_item;

//Takes in a username and password
//check if the request body is empty
//if not 
//search the database for the given username
//if found hash given password
//compare password hashes
//if they equal return an auth token
pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    let req = match event.payload::<RequestBody>() {
        Ok(Some(req)) => req,
        Ok(None) => return text_response("Request body empty", 400),
        Err(err) => {
            println!("{err}");
            return text_response("internal server error", 500)
        },
    };

    let client = create_dynamo_client().await;
    let result = client.query().table_name("RaddUsersTable").index_name("UsernameIndex")
        .key_condition_expression("username = :username")
        .expression_attribute_values(":username", AttributeValue::S(req.username.to_string()))
        .send().await?;

    let item = match result.items().first() {
        Some(item) => item.clone(),
        None => return text_response("invalid username or password", 401),
    };

    let user: User = from_item(item)?;

    let hash = hash(&req.password);
    if hash != user.password {
        return text_response("invalid username or password", 401);
    }

    let auth_token = create_jwt(&user, "JWT_SECRET")?;
    let response = Response::builder()
        .status(200)
        .header(SET_COOKIE, HeaderValue::from_str(&auth_token)?)
        .body(Body::from("logged in"))?;

    Ok(response)
}