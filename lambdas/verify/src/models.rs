use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
pub struct Claims {
    pub sub: String,
    pub tier: String,
    pub iat: usize,
    pub exp: usize,
}