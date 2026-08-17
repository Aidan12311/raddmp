use lambda_http::{Body, Error, Request, RequestExt, Response};

//Takes in a username and password
//check if the request body is empty
//if not 
//search the database for the given username
//if found hash given password
//compare password hashes
//if they equal return an auth token
pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    todo!()
}