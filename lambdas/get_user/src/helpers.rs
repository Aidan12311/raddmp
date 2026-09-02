use lambda_http::{Body, Error, Response, Request};
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
Send as an http response in the form of json
Takes in a &generic and a u16 status code
*/
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
Extracts a token from an http cookie
Takes the http &Request
 */
pub fn extract_token_from_cookie(event: &Request) -> Option<String> {
    let cookie_header = event.headers().get("cookie")?.to_str().ok()?;
    cookie_header
        .split(';')
        .map(|kv| kv.trim())
        .find_map(|kv| kv.strip_prefix("auth_token="))
        .map(|v| v.to_string())
}  