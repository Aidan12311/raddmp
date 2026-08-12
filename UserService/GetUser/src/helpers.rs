use lambda_http::{Body, Error, Response};
use aws_config::{BehaviorVersion, Region};
use aws_sdk_dynamodb::Client;
use serde::Serialize;
use sha2::{Digest, Sha256};

pub async fn create_client() -> Client {
    let config = aws_config::defaults(BehaviorVersion::latest())
        .region(Region::new("us-east-1"))
        .load()
        .await;

    Client::new(&config)
}

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
        .body(serde_json::to_string(value)?.into())
        .map_err(Box::new)?)
}

pub fn hash(password: &String) -> String {
    let mut hasher = Sha256::new();
    hasher.update(password.as_bytes());
    let result = hasher.finalize();

    hex::encode_upper(result)
}