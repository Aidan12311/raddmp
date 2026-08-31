use lambda_http::{Body, Error, Response};
use aws_config::{BehaviorVersion};
use serde::Serialize;


/*
Creates a dynamo client with lastest aws_config
 */
pub async fn create_dynamo_client() -> aws_sdk_dynamodb::Client {
    let config = aws_config::load_defaults(aws_config::BehaviorVersion::latest()).await;
    aws_sdk_dynamodb::Client::new(&config)
}

/*
Creates a sqs client with lastest aws_config
 */
pub async fn create_sqs_client() -> aws_sdk_sqs::Client {
    let config = aws_config::load_defaults(BehaviorVersion::latest()).await;
    aws_sdk_sqs::Client::new(&config)
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

/*
Send as an http response in the form of json
Takes in a &generic and a u16 status code
*/
pub fn json_response<T: Serialize>(value: &T, status_code: u16,) -> Result<Response<Body>, Error> {
    Ok(Response::builder()
        .status(status_code)
        .header("content-type", "application/json")
        .header("Access-Control-Allow-Origin", "*")
        .header("Access-Control-Allow-Credentials", "true")
        .body(serde_json::to_string(value)?.into())
        .map_err(Box::new)?)
}