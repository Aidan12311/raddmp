use lambda_runtime::{tracing, Error, LambdaEvent};
use aws_lambda_events::event::sqs::SqsEvent;
use serde::{Deserialize, Serialize};
use mail_builder::MessageBuilder;
use mail_send::SmtpClientBuilder;

#[derive(Debug, Deserialize, Serialize)]
pub struct QueueMessage {
    pub email: String,
    pub verification_token: String,
}

/*
Waits for an sqs event then sends an email to verify the user
 */
pub(crate) async fn function_handler(event: LambdaEvent<SqsEvent>) -> Result<(), Error> {
    //get request body
    let req = event.payload.records;

    //set reader credentials
    let sender_email = std::env::var("SENDER_EMAIL")
        .expect("SENDER_EMAIL environment variable not set");
    let app_password = std::env::var("GMAIL_APP_PASSWORD")
        .expect("GMAIL_APP_PASSWORD environment variable not set");

    //loop though each message in the queue
    for item in req {
        let body = item.body.unwrap_or_default();

        //grab the message and validate if it matches the json
        let message: QueueMessage = match serde_json::from_str(&body) {
            Ok(msg) => msg,
            Err(e) => {
                tracing::error!("Failed to parse message body: {}. Body was: {}", e, body);
                continue;
            }
        };

        //set email body
        let body_data = format!("https://gtxt6cd874.execute-api.us-east-2.amazonaws.com/Prod/users/verify?token={}", message.verification_token);

        //build the email
        let email = MessageBuilder::new()
            .from(("RaddMp", sender_email.as_str()))
            .to(message.email.as_str())
            .subject("RaddMp Verification")
            .text_body(body_data);

        //connect to smtp and send email
        let result = SmtpClientBuilder::new("smtp.gmail.com", 465)?
            .implicit_tls(true)
            .credentials((sender_email.as_str(), app_password.as_str()))
            .connect()
            .await;

        //validate if the email was actually send and log the event
        match result {
            Ok(mut client) => {
                if let Err(e) = client.send(email).await {
                    tracing::error!("Failed to send email to {}: {}", message.email, e);
                } else {
                    tracing::info!(
                        "Sent verification email to {}: https://gtxt6cd874.execute-api.us-east-2.amazonaws.com/Prod/users/verify?token={}",
                        message.email,
                        message.verification_token
                    );
                }
            }
            Err(e) => {
                tracing::error!("Failed to connect to SMTP server: {}", e);
            }
        }
    }

    Ok(())
}