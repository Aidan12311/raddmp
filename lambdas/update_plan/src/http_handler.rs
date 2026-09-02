use lambda_http::{Body, Error, Request, RequestPayloadExt, Response};
use jsonwebtoken::{decode, DecodingKey, Validation, Algorithm};
use crate::models::{Claims, UpdatePlanRequest};
use crate::helpers::{text_response, json_response, extract_token_from_cookie};
use aws_sdk_dynamodb::types::AttributeValue;

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

    //validate the request body
    let req = match event.payload::<UpdatePlanRequest>() {
        Ok(Some(req)) => req,
        Ok(None) => return text_response("Request body empty", 400),
        Err(err) => {
            println!("{err}");
            return text_response("internal server error", 500)
        },
    };

    let has_basic_plan = req.plan != "premium";

    client
        .update_item()
        .table_name("RaddUsersTable")
        .key("id", AttributeValue::S(claims.sub.to_string()))
        .update_expression("SET has_basic_plan = :val")
        .expression_attribute_values(":val", AttributeValue::Bool(has_basic_plan))
        .send()
        .await?;

    let message = if has_basic_plan { "Plan changed to basic" } else { "Plan changed to premium" };
    json_response(&message.to_string(), 200)
}