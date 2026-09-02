use uuid::Uuid;
use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
pub struct RequestBody {
    pub username: String,
    pub password: String,
    pub email: String,
    pub plan: String,
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

#[derive(Debug, Deserialize, Serialize)]
pub struct QueueMessage {
    pub email: String,
    pub verification_token: String
}

#[derive(Debug, Deserialize, Serialize)]
pub struct ResponseBody {
    pub message: String
}