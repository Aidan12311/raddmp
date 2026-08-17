use lambda_http::{Body, Error, Response, Request};
use aws_config::{BehaviorVersion, Region};
use aws_sdk_dynamodb::Client;
use serde::Serialize;

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

pub fn extract_token_from_cookie(event: &Request) -> Option<String> {
    let cookie_header = event.headers().get("cookie")?.to_str().ok()?;
    cookie_header
        .split(';')
        .map(|kv| kv.trim())
        .find_map(|kv| kv.strip_prefix("auth_token="))
        .map(|v| v.to_string())
}  