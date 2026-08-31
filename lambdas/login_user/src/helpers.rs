use lambda_http::{Body, Error, Response};
use sha2::{Digest, Sha256};
use jsonwebtoken::{encode, Header, EncodingKey, Algorithm};
use chrono::{Utc};
use crate::models::{Claims, User};
use serde::Serialize;


/*
Creates a dynamo client with lastest aws_config
 */
pub async fn create_dynamo_client() -> aws_sdk_dynamodb::Client {
    let config = aws_config::load_defaults(aws_config::BehaviorVersion::latest()).await;
    aws_sdk_dynamodb::Client::new(&config)
}

/*
Sends a http text resonse
Takes an &str message and a status code as u16 
 */
pub fn text_response(message: &str, status_code: u16) -> Result<Response<Body>, Error> {
    Ok(Response::builder()
        .status(status_code)
        .header("content-type", "text/html")
        .body(message.into())
        .map_err(Box::new)?)
}

pub fn json_response<T: Serialize>(value: &T, status_code: u16,) -> Result<Response<Body>, Error> {
    Ok(Response::builder()
        .status(status_code)
        .header("content-type", "application/json")
        .header("Access-Control-Allow-Origin", "http://localhost:3000")
        .header("Access-Control-Allow-Credentials", "true")
        .body(serde_json::to_string(value)?.into())
        .map_err(Box::new)?)
}

/*
Takes a &String and hashes it using sha256
 */
pub fn hash(password: &String) -> String {
    let mut hasher = Sha256::new();
    hasher.update(password.as_bytes());
    let result = hasher.finalize();

    hex::encode_upper(result)
}

/*
Creates a jwt from a user object
Takes in an &User object and a &str secret phrase 
 */
pub fn create_jwt(user: &User, secret: &str) -> Result<String, Error> {
    //TODO maybe chaange the token lifetime to something else or allow it to be entered as a parameter
    const TOKEN_LIFETIME_SECONDS: i64 = 60 * 60 * 24;
    let now = Utc::now().timestamp() as usize;
    let claims = Claims {
        sub: user.id.to_string(),
        tier: if user.has_basic_plan { "basic".to_string() } else { "premium".to_string() },
        iat: now,
        exp: now + TOKEN_LIFETIME_SECONDS as usize,
    };

    encode(
        &Header::new(Algorithm::HS256),
        &claims,
        &EncodingKey::from_secret(secret.as_bytes()),
    )
    .map_err(Error::from)
}