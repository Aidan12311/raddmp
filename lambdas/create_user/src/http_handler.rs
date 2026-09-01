use lambda_http::{Body, Error, Request, RequestPayloadExt, Response};
use lambda_http::http::header::{HeaderValue, SET_COOKIE};
use crate::helpers::{create_dynamo_client, create_jwt, create_sqs_client, hash, json_response, text_response};
use crate::models::{QueueMessage, RequestBody, User, ResponseBody};
use aws_sdk_dynamodb::types::AttributeValue;
use uuid::Uuid;
use fancy_regex::Regex;

//TODO This function should ensure the username of each user is unique
/*
Creates a user in the database
Takes in a request object like this {username: String, password: String, email: String}
*/
pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    //validate the request body 
    let req = match event.payload::<RequestBody>() {
        Ok(Some(req)) => req,
        Ok(None) => {
            let response = ResponseBody{message: "Request body empty".to_string()};
            return json_response(&response, 400)
        },
        Err(err) => {
            println!("{err}");
            let response = ResponseBody{message: "internal server error".to_string()};
            return json_response(&response, 500)
        },
    };

    //validate username and password
    if !is_valid_field(&req.email, Regex::new(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")?) {
        let response = ResponseBody{message: "Incorrect email".to_string()};
        return json_response(&response, 400)
    }

    // if !is_valid_field(&req.password, Regex::new(r#"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$"#)?){
    //    let response = ResponseBody{message: "Incorrect Password".to_string()};
    //    return json_response(&response, 400)
    // }

    //generate user object and missing required fields
    let user = User {
        id: Uuid::new_v4(),
        username: req.username,
        password: hash(&req.password),
        email: req.email,
        has_basic_plan: true,
        is_verified: false
    };

    //create dynamo client
    let client = create_dynamo_client().await;

    //check database for existing username
    let result = client
        .query()
        .table_name("RaddUsersTable")
        .index_name("UsernameIndex")
        .key_condition_expression("username = :username")
        .expression_attribute_values(":username", AttributeValue::S(user.username.clone()))
        .send()
        .await?;

    if !result.items().is_empty() {
        let response = ResponseBody{message: "Username already exists".to_string()};
            return json_response(&response, 400)
    }

    //check the database for an existing email
    let result = client
        .query()
        .table_name("RaddUsersTable")
        .index_name("EmailIndex")
        .key_condition_expression("email = :email")
        .expression_attribute_values(":email", AttributeValue::S(user.email.clone()))
        .send()
        .await?;

    if !result.items().is_empty() {
        let response = ResponseBody{message: "Email already exists".to_string()};
        return json_response(&response, 400)
    }

    let _result = client
        .put_item()
        .table_name("RaddUsersTable")
        .item("id", AttributeValue::S(user.id.to_string()))
        .item("username", AttributeValue::S(user.username.clone()))
        .item("password", AttributeValue::S(user.password.clone()))
        .item("email", AttributeValue::S(user.email.clone()))
        .item("has_basic_plan", AttributeValue::Bool(user.has_basic_plan.clone()))
        .item("is_verified", AttributeValue::Bool(user.is_verified.clone()))
        .send()
        .await?;

    //generate verification token
    let verification_token = create_jwt(&user, "ThisIsTheSecret")?;
    let message = serde_json::to_string(&QueueMessage{
        email: user.email.clone(),
        verification_token,
    })?;
    //genreate sqs client and send message to queue
    let client = create_sqs_client().await;
    let queue_url = std::env::var("QUEUE_URL")
        .map_err(|_| Error::from("QUEUE_URL environment variable not set"))?;

    let _result = client
        .send_message()
        .queue_url(queue_url)
        .message_body(message)
        .send()
        .await;

    //generate auth token
    //send response containing auth token
    //SECRET = JWT_SECRET
    //TODO Make the secret an environemnt variable
    let auth_token = create_jwt(&user, "JWT_SECRET")?;
    let cookie_value = format!("auth_token={}; HttpOnly; Max-Age=3600; Secure; SameSite=None; Path=/", auth_token);
    let response_body = ResponseBody{message: "Created user".to_string()};
    let response = Response::builder()
        .status(201)
        .header("content-type", "application/json")
        .header("Access-Control-Allow-Origin", "http://localhost:3000")
        .header("Access-Control-Allow-Credentials", "true")
        .header(SET_COOKIE, HeaderValue::from_str(&cookie_value)?)
        .body(Body::from(serde_json::to_string(&response_body)?))?;

    Ok(response)
}

//made this to have my code clearer but it didnt do shit
fn is_valid_field(field: &str, pattern: Regex) -> bool {
    pattern.is_match(field).unwrap_or(false)
}