use lambda_http::{Body, Error, Request, Response};
use sha2::{Digest, Sha256};
use jsonwebtoken::{encode, Header, EncodingKey, Algorithm};
use chrono::{Utc};
use crate::models::{Claims, User};
use serde::Serialize;

/*
Origins allowed to make credentialed cross-origin requests to this API.
The first entry is used as the fallback when the request has no (or an
unrecognized) Origin header.
 */
pub const ALLOWED_ORIGINS: [&str; 2] = [
    "https://main.d3hoq6y7t1r914.amplifyapp.com",
    "http://localhost:3000",
];

/*
Picks the Access-Control-Allow-Origin value for a request: echoes back the
request's Origin header if it's in the allow-list, otherwise falls back to
the first allowed origin. Access-Control-Allow-Origin can only ever hold a
single value when credentials are involved, so this can't just be a static
multi-origin string.
 */
pub fn resolve_cors_origin(event: &Request) -> &'static str {
    event
        .headers()
        .get("origin")
        .and_then(|v| v.to_str().ok())
        .and_then(|origin| ALLOWED_ORIGINS.iter().find(|&&allowed| allowed == origin))
        .copied()
        .unwrap_or(ALLOWED_ORIGINS[0])
}

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

pub fn json_response<T: Serialize>(value: &T, status_code: u16, origin: &str) -> Result<Response<Body>, Error> {
    Ok(Response::builder()
        .status(status_code)
        .header("content-type", "application/json")
        .header("Access-Control-Allow-Origin", origin)
        .header("Access-Control-Allow-Credentials", "true")
        .header("Vary", "Origin")
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