use std::env;

use lambda_http::{Body, Error, Request, RequestExt, Response};
use crate::helpers::{text_response, verify_jwt, resolve_cors_origin};
use aws_sdk_dynamodb::{types::AttributeValue};

/*
Verifies a user in the database
Takes in a jwt in the route parameters
 */
pub(crate) async fn function_handler(client: &aws_sdk_dynamodb::Client, event: Request) -> Result<Response<Body>, Error> {
    let origin = resolve_cors_origin(&event);

    //validate the token is in the route
    let query_params = event.query_string_parameters();
    let token = query_params.first("token").unwrap_or("");

    //validate the token isnt empty
    if token.is_empty() {
        return text_response("missing token", 400, origin);
    }

    //decode jwt and validte it matches my claims
    let jwt_secret = env::var("JWT_SECRET")
        .expect("JWT_SECRET not set!");

    let claims = match verify_jwt(token, &jwt_secret) {
        Ok(claims) => claims,
        Err(err) => {
            println!("{err}");
            return text_response("invalid or expired token", 401, origin);
        }
    };

    //update user verified field in database
    client
        .update_item()
        .table_name("RaddUsersTable")
        .key("id", AttributeValue::S(claims.sub.to_string()))
        .update_expression("SET is_verified = :verified")
        .expression_attribute_values(":verified", AttributeValue::Bool(true))
        .send()
        .await?;

    text_response("verified", 200, origin)
}
