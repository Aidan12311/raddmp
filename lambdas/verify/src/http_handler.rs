use lambda_http::{Body, Error, Request, RequestExt, Response};
use crate::helpers::{text_response, verify_jwt};

/*
Verifies a user in the database
Takes in a jwt in the route parameters
 */
pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    //validate the token is in the route
    let query_params = event.query_string_parameters();
    let token = query_params.first("token").unwrap_or("");

    //validate the token isnt empty
    if token.is_empty() {
        return text_response("missing token", 400);
    }

    //decode jwt and validte it matches my claims
    let claims = match verify_jwt(token, "ThisIsTheSecret") {
        Ok(claims) => claims,
        Err(err) => {
            println!("{err}");
            return text_response("invalid or expired token", 401);
        }
    };

    //TODO update the user object in the database
    let user_id = claims.sub;

    text_response("verified", 200)
}