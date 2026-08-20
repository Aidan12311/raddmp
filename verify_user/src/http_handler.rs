use lambda_http::{Body, Error, Request, RequestExt, Response};

use crate::helpers::text_response;

//check query parameters for token
//decode jwt
//query the database for user id
//update user is_verified field
//post update to database
pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    let path_params = event.path_parameters();
    let auth_token = path_params.first("token").unwrap_or("");

    if auth_token.is_empty() {
        return text_response("Verification token missing", 400)
    }
    todo!()
}