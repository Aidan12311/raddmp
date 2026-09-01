use lambda_http::{Body, Error, Request, RequestPayloadExt, Response};
use crate::helpers::{create_dynamo_client, create_jwt, hash, text_response, json_response};
use crate::models::{RequestBody, User, ResponseBody};
use lambda_http::http::header::{HeaderValue, SET_COOKIE};
use aws_sdk_dynamodb::types::AttributeValue;
use serde_dynamo::from_item;

/*
Validates if a user exists in the database and returns an auth token
Takes in a request object like this {username: "", password: ""}
 */
pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    //validate the request body isnt empty and has the proper object structure
    let req = match event.payload::<RequestBody>() {
        Ok(Some(req)) => req,
        Ok(None) => {
            let response = ResponseBody{message: "Request body empty".to_string()};
            return json_response(&response, 400)
        },
        Err(err) => {
            println!("{err}");
            let response = ResponseBody{message: "Internal server error".to_string()};
            return json_response(&response, 500)
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
        None => {
            let response = ResponseBody{message: "Invalid username".to_string()};
            return json_response(&response, 400)
        },
    };

    //serialize database item into user object
    let user: User = from_item(item)?;

    //hash given password and compare password hashes
    let hash = hash(&req.password);
    if hash != user.password {
        let response = ResponseBody{message: "Invalid Password".to_string()};
        return json_response(&response, 400);
    }

    //generate auth token and send request
    let auth_token = create_jwt(&user, "JWT_SECRET")?;
    // Max-Age=3600;
    let cookie_value = format!("auth_token={}; HttpOnly; Max-Age=3600; Secure; SameSite=None; Path=/", auth_token);
    let response_body = ResponseBody{message: "Logged in".to_string()};
    let response = Response::builder()
        .status(200)
        .header("content-type", "application/json")
        .header("Access-Control-Allow-Origin", "http://localhost:3000")
        .header("Access-Control-Allow-Credentials", "true")
        .header(SET_COOKIE, HeaderValue::from_str(&cookie_value)?)
        .body(Body::from(serde_json::to_string(&response_body)?))?;

    Ok(response)
}