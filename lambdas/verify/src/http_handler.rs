use lambda_http::{Body, Error, Request, RequestExt, Response};
use crate::helpers::{text_response, verify_jwt};

pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    let query_params = event.query_string_parameters();
    let token = query_params.first("token").unwrap_or("");

    if token.is_empty() {
        return text_response("missing token", 400);
    }

    let claims = match verify_jwt(token, "ThisIsTheSecret") {
        Ok(claims) => claims,
        Err(err) => {
            println!("{err}");
            return text_response("invalid or expired token", 401);
        }
    };

    let user_id = claims.sub;

    text_response("verified", 200)
}