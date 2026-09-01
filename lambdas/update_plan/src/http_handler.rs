use std::env;

use lambda_http::{Body, Error, Request, Response};
use jsonwebtoken::{decode, DecodingKey, Validation, Algorithm};
use crate::models::{Claims, User};
use crate::helpers::{text_response, json_response, extract_token_from_cookie};
use aws_sdk_dynamodb::types::AttributeValue;
use serde_dynamo::aws_sdk_dynamodb_1::from_item;


pub(crate) async fn function_handler(client: &aws_sdk_dynamodb::Client, event: Request) -> Result<Response<Body>, Error> {
    //check if request contains an auth token
    let token = match extract_token_from_cookie(&event) {
        Some(t) => t,
        None => return text_response("Missing auth token", 401),
    };

    // extract JWT secret from env var
    let jwt_secret = std::env::var("JWT_SECRET")
        .expect("JWT_SECRET must be set!");

    let claims = match decode::<Claims>(
        &token,
        &DecodingKey::from_secret(jwt_secret.as_bytes()),
        &Validation::new(Algorithm::HS256),
    ) {
        Ok(data) => data.claims,
        Err(err) => {
            println!("{err}");
            return text_response("Invalid auth token", 401);
        }
    };

    client
        .update_item()
        .table_name("RaddUsersTable")
        .key("id", AttributeValue::S(claims.sub.to_string()))
        .update_expression("SET has_basic_plan = :premium")
        .expression_attribute_values(":premium", AttributeValue::Bool(false))
        .send()
        .await?;

    json_response(&"Plan has changed to premium".to_string(), 200)
}