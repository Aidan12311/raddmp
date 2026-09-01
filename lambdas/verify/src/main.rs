use lambda_http::{run, service_fn, tracing, Error};
mod http_handler;
mod helpers;
mod models;
use http_handler::function_handler;
use helpers::create_dynamo_client;

#[tokio::main]
async fn main() -> Result<(), Error> {
    tracing::init_default_subscriber();

    // Built once at cold start and reused across every warm invocation --
    // creating a fresh client per-request re-resolves AWS config/credentials
    // every time, which was adding real latency to every verification.
    let client = create_dynamo_client().await;

    run(service_fn(|event| function_handler(&client, event))).await
}
