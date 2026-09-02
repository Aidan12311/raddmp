use lambda_http::{Body, Error, Request, Response};
use jsonwebtoken::{decode, DecodingKey, Validation, Algorithm};
use crate::models::{Claims};

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
pub fn text_response(message: &str, status_code: u16, origin: &str) -> Result<Response<Body>, Error> {
    Ok(Response::builder()
        .status(status_code)
        .header("content-type", "text/html")
        .header("Access-Control-Allow-Origin", origin)
        .header("Access-Control-Allow-Credentials", "true")
        .header("Vary", "Origin")
        .body(message.into())
        .map_err(Box::new)?)
}

/*
Decode a jwt using the secret and return the claims
*/
pub fn verify_jwt(token: &str, secret: &str) -> Result<Claims, Error> {
    let token_data = decode::<Claims>(
        token,
        &DecodingKey::from_secret(secret.as_bytes()),
        &Validation::new(Algorithm::HS256),
    )?;

    Ok(token_data.claims)
}