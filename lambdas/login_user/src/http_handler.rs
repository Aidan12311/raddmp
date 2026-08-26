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
/*
Validates if a user exists in the database and returns an auth token
Takes in a request object like this {username: "", password: ""}
 */
pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    //validate the request body isnt empty and has the proper object structure
    let req = match event.payload::<RequestBody>() {
        Ok(Some(req)) => req,
        Ok(None) => return text_response("Request body empty", 400),
        Err(err) => {
            println!("{err}");
            return text_response("internal server error", 500)
        },
    };

    //create a dynamo client and query the users table
    let client = create_dynamo_client().await;
    let result = client.query().table_name("RaddUsersTable").index_name("UsernameIndex")
        .key_condition_expression("username = :username")
        .expression_attribute_values(":username", AttributeValue::S(req.username.to_string()))
        .send().await?;

    //validate the result
    let item = match result.items().first() {
        Some(item) => item.clone(),
        None => return text_response("invalid username or password", 401),
    };

    //serialize database item into user object
    let user: User = from_item(item)?;

    //hash given password and compare password hashes
    let hash = hash(&req.password);
    if hash != user.password {
        return text_response("invalid username or password", 401);
    }

    //generate auth token and send request
    let auth_token = create_jwt(&user, "JWT_SECRET")?;
    let cookie_value = format!("auth_token={}; HttpOnly; Secure; SameSite=Strict; Path=/", auth_token);
    let response = Response::builder()
        .status(200)
        .header(SET_COOKIE, HeaderValue::from_str(&cookie_value)?)
        .body(Body::from("logged in"))?;

    Ok(response)
}