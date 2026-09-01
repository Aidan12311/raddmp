use lambda_http::{Body, Error, Request, RequestExt, Response};
use serde::{Deserialize, Serialize};
use crate::helpers::{create_dynamo_client, json_response};

#[derive(Debug, Deserialize, Serialize)]
pub struct RaddMetrics {
    pub total_users: i64,
    pub total_songs: i64,
    pub total_playlists: i64
}

pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
    let client = create_dynamo_client().await;

    let result = client.describe_table().table_name("RaddUsersTable").send().await?;
    let total_users = result.table().and_then(|t| t.item_count()).unwrap_or(0);

    let result = client.describe_table().table_name("RaddMusicTable").send().await?;
    let mut total_songs = result.table().and_then(|t| t.item_count()).unwrap_or(0);

    let result = client.describe_table().table_name("RaddPlaylistsTable").send().await?;
    let mut total_playlists = result.table().and_then(|t| t.item_count()).unwrap_or(0);
    
    let response = RaddMetrics{ total_users, total_songs, total_playlists};
    json_response(&response, 200)
}