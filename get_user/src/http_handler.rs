use lambda_http::{Body, Error, Request, Response};
use jsonwebtoken::{decode, DecodingKey, Validation, Algorithm};
use crate::models::{Claims, User};
use crate::helpers::{create_client, text_response, json_response, extract_token_from_cookie};
use aws_sdk_dynamodb::types::AttributeValue;
use serde_dynamo::aws_sdk_dynamodb_1::from_item;

pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    //check if request contains an auth token
    let token = match extract_token_from_cookie(&event) {
        Some(t) => t,
        None => return text_response("Missing auth token", 401),
    };

    //decode auth token 
    //todo i probably want to make this a function
    let claims = match decode::<Claims>(
        &token,
        &DecodingKey::from_secret("JWT_SECRET".as_bytes()),
        &Validation::new(Algorithm::HS256),
    ) {
        Ok(data) => data.claims,
        Err(err) => {
            println!("{err}");
            return text_response("Invalid auth token", 401);
        }
    };

    //create client and query database using the user id
    let client = create_client().await;
    let result = client.get_item().table_name("RaddUsersTable")
        .key("id", AttributeValue::S(claims.sub.into())).send().await?;

    //check if query returned an item
    if let Some(item) = result.item {
        //return the user if it did
        let user: User = from_item(item)?;
        return Ok(json_response(&user, 200)?)
    }
    
    Ok(text_response("User not found please check the id and try again", 404)?)
} 