use lambda_runtime::{tracing, Error, LambdaEvent};
use aws_lambda_events::event::sqs::SqsEvent;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
struct VerificationMessage {
    email: String,
    auth_token: String,
}

//read a message from the queue
//check the message queue for a token and email
//if neither are empty send an email to the adress containing a link to verify thats like /verify?token=verification_token
pub(crate) async fn function_handler(event: LambdaEvent<SqsEvent>) -> Result<(), Error> {
    let records = event.payload.records;
    tracing::info!("Received {} messages", records.len());

    for record in records {
        let body = record.body.unwrap_or_default();

        match serde_json::from_str::<VerificationMessage>(&body) {
            Ok(message) => {
                tracing::info!("amazon_url/Prod/users/verify?token={}", message.auth_token);
                // do something with msg.auth_token — validate it, look up the user, etc.
                // avoid logging auth_token itself
            }
            Err(err) => {
                tracing::error!("Failed to parse message body: {}", err);
                // decide: skip this message, or fail the batch?
            }
        }
    }

    Ok(())
}