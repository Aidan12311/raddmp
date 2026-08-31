use lambda_http::{Body, Error, Request, RequestExt, Response};

//create an aws client 
//query database for number of users
//query database for number of songs
//query database for number of playlists
pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    todo!()
}