use lambda_http::{Body, Error, Request, RequestExt, Response};

//check query parameters for token
//decode jwt
//query the database for user id
//update user is_verified field
//post update to database
pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    let path_params = event.path_parameters();
    let auth_token = path_parameters.first("token").unwrap_or_default("");
    todo!()
}