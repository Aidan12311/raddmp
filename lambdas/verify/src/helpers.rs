use lambda_http::{Body, Error, Response};
use aws_config::{BehaviorVersion, Region};
use sha2::{Digest, Sha256};
use jsonwebtoken::{decode, DecodingKey, Validation, Algorithm};
use chrono::{Utc};
use crate::models::{Claims, User};


pub async fn create_dynamo_client() -> aws_sdk_dynamodb::Client {
    let config = aws_config::load_defaults(aws_config::BehaviorVersion::latest()).await;
    aws_sdk_dynamodb::Client::new(&config)
}

pub async fn create_sqs_client() -> aws_sdk_sqs::Client {
    let config = aws_config::load_defaults(BehaviorVersion::latest()).await;
    aws_sdk_sqs::Client::new(&config)
}
pub fn text_response(message: &str, status_code: u16) -> Result<Response<Body>, Error> {
    Ok(Response::builder()
        .status(status_code)
        .header("content-type", "text/html")
        .body(message.into())
        .map_err(Box::new)?)
}

pub fn hash(password: &String) -> String {
    let mut hasher = Sha256::new();
    hasher.update(password.as_bytes());
    let result = hasher.finalize();

    hex::encode_upper(result)
}

pub fn verify_jwt(token: &str, secret: &str) -> Result<Claims, Error> {
    let token_data = decode::<Claims>(
        token,
        &DecodingKey::from_secret(secret.as_bytes()),
        &Validation::new(Algorithm::HS256),
    )?;

    Ok(token_data.claims)
}