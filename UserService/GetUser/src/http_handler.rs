use lambda_http::{Body, Error, Request, RequestPayloadExt, Response};
use crate::helpers::{create_client, text_response, hash};
use crate::models::{RequestBody, ResponseBody, User};
use aws_sdk_dynamodb::types::AttributeValue;
use uuid::Uuid;
use fancy_regex::Regex;


//take in a username as password
//check is request body is empty
//if no check if username is in database
//if yes hash password in request body
//compare hashes
//if hashs equal return auth token
pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    let req = match event.payload::<RequestBody>() {
        Ok(Some(req)) => req,
        Ok(None) => return text_response("Request body empty", 400),
        Err(err) => {
            println!("{err}");
            return text_response("internal server error", 500)
        },
    };

    let client = create_client().await;
    //TODO fix the table name
    let result = client.get_item().table_name("UsersTable")
        .key("username", AttributeValue::S(req.username.into())).send().await?;
    
    if let Some(user) = result.item {
        
    }

    todo!()
}