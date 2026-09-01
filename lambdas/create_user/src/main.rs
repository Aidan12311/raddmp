use lambda_http::{run, service_fn, tracing, Error};
mod http_handler;
mod models;
mod helpers;
use http_handler::function_handler;
use helpers::{create_dynamo_client, create_sqs_client};

#[tokio::main]
async fn main() -> Result<(), Error> {
    tracing::init_default_subscriber();

    // Built once at cold start and reused across every warm invocation --
    // creating fresh clients per-request re-resolves AWS config/credentials
    // every time, which was adding real latency to every signup.
    let dynamo_client = create_dynamo_client().await;
    let sqs_client = create_sqs_client().await;

    run(service_fn(|event| function_handler(&dynamo_client, &sqs_client, event))).await
}