use uuid::Uuid;
use serde::{Deserialize, Serialize};

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
pub struct UpdatePlanRequest {
    pub plan: String,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Claims {
    pub sub: String,
    pub tier: String,
    pub iat: usize,
    pub exp: usize,
}