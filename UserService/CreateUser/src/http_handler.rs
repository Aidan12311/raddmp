use aws_config::imds::client;
use lambda_http::{Body, Error, Request, RequestPayloadExt, Response};
use crate::helpers::{create_dynamo_client, create_sqs_client, text_response, hash};
use crate::models::{Claims, RequestBody, ResponseBody, User};
use jsonwebtoken::{encode, Header, EncodingKey, Algorithm};
use aws_sdk_dynamodb::types::AttributeValue;
use uuid::Uuid;
use fancy_regex::Regex;
use chrono::{Utc, Duration};



//takes in the request body
//validate the data
//if valid 
//create user database object
//genreate uuid
//hash user password
//set plan to basic
//send a message to sqs containing a link like /user/verify?id=userId possible user a jwt to create a verification token
//create user auth jwt
//send back 201 along with jwt
//if data isnt valid send 400 with message
pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    let req = match event.payload::<RequestBody>() {
        Ok(Some(req)) => req,
        Ok(None) => return text_response("Request body empty", 400),
        Err(err) => {
            println!("{err}");
            return text_response("internal server error", 500)
        },
    };

    if !is_valid_field(&req.email, Regex::new(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$)")?) {
        return text_response("Incorrect Email", 400)
    }

    if !is_valid_field(&req.password, Regex::new(r#"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$"#)?){
        return text_response("Incorrect Password", 400)
    }

    //TODO i can maybe get rid of the user object but i should ask what the auth token looks like
    let user = User {
        id: Uuid::new_v4(),
        username: req.username,
        password: hash(&req.password),
        email: req.email,
        has_basic_plan: true,
        is_verified: false
    };

    let client = create_dynamo_client().await;


    //TODO fix the table name
    let _result = client
        .put_item()
        .table_name("UsersTable")
        .item("id", AttributeValue::S(user.id.to_string()))
        .item("name", AttributeValue::S(user.username.clone()))
        .item("phone", AttributeValue::S(user.password.clone()))
        .item("email", AttributeValue::S(user.email.clone()))
        .item("has_basic_plan", AttributeValue::Bool(user.has_basic_plan.clone()))
        .item("is_verified", AttributeValue::Bool(user.is_verified.clone()))
        .send()
        .await?;

    //TODO i might be able to make this into a function
    //TODO i should probably make the secret an environment variable or something like that but idk who cares
    let claims = Claims{
        sub: user.id.to_string(),
        exp: Utc::now().timestamp() as usize,
        iat:  (Utc::now() + Duration::hours(24)).timestamp() as usize,
    };
    let verification_token =  encode(&Header::new(Algorithm::HS256), 
        &claims,&EncodingKey::from_secret("UserVerificationSecret".as_bytes()),)?;
    //send message to sqs
    let client = create_sqs_client().await;
    let result = client.send_message().queue_url("https://sqs.us-east-1.amazonaws.com/242827408047/RADDVerificationQueue")
        .message_body(verification_token).send().await;

    //generate auth token
    //send response containing auth token

    todo!()
}

fn is_valid_field(field: &str, pattern: Regex) -> bool {
    pattern.is_match(field).unwrap_or(false)
}