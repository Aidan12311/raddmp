use uuid::Uuid;
use serde::{Deserialize, Serialize};

//TODO im going to need to edit this model
#[derive(Debug, Deserialize, Serialize)]
pub struct RequestBody {
    pub username: String,
    pub password: String,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct ResponseBody {
    pub auth_token: String
}

#[derive(Debug, Deserialize, Serialize)]
pub struct User {
    pub id: Uuid,
    pub username: String,
    pub password: String,
    pub email: String,
    pub has_basic_plan: bool,
    pub is_verified: bool
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Claims {
    pub sub: String,
    pub tier: String,
    pub iat: usize,
    pub exp: usize,
}