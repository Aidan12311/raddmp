    use lambda_http::{Body, Error, Request, RequestPayloadExt, Response};
    use lambda_http::http::header::{HeaderValue, SET_COOKIE};
    use crate::helpers::{create_dynamo_client, create_jwt, create_sqs_client, hash, text_response};
    use crate::models::{QueueMessage, RequestBody, User};
    use aws_sdk_dynamodb::types::AttributeValue;
    use uuid::Uuid;
    use fancy_regex::Regex;

    //TODO This function should ensure the username of each user is unique
    pub(crate) async fn function_handler(event: Request) -> Result<Response<Body>, Error> {
        //check if the request body is empty
        let req = match event.payload::<RequestBody>() {
            Ok(Some(req)) => req,
            Ok(None) => return text_response("Request body empty", 400),
            Err(err) => {
                println!("{err}");
                return text_response("internal server error", 500)
            },
        };

        //validate username and password
        if !is_valid_field(&req.email, Regex::new(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")?) {
            return text_response("Incorrect Email", 400)
        }

        if !is_valid_field(&req.password, Regex::new(r#"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$"#)?){
            return text_response("Incorrect Password", 400)
        }

        //generate user object and missing required fields
        //TODO i can maybe get rid of the user object but i should ask what the auth token looks like
        let user = User {
            id: Uuid::new_v4(),
            username: req.username,
            password: hash(&req.password),
            email: req.email,
            has_basic_plan: true,
            is_verified: false
        };

        //create dynamo client and upload the user to the database
        let client = create_dynamo_client().await;
        //TODO fix the table name
        let _result = client
            .put_item()
            .table_name("RaddUsersTable")
            .item("id", AttributeValue::S(user.id.to_string()))
            .item("username", AttributeValue::S(user.username.clone()))
            .item("password", AttributeValue::S(user.password.clone()))
            .item("email", AttributeValue::S(user.email.clone()))
            .item("has_basic_plan", AttributeValue::Bool(user.has_basic_plan.clone()))
            .item("is_verified", AttributeValue::Bool(user.is_verified.clone()))
            .send()
            .await?;

        //generate verification token
        //TODO i should probably make the secret an environment variable or something like that but idk who cares
        let verification_token = create_jwt(&user, "ThisIsTheSecret")?;
        let message = serde_json::to_string(&QueueMessage{
            email: user.email.clone(),
            verification_token,
        })?;
        //genreate sqs client and send message to queue
        let client = create_sqs_client().await;
        //TODO i need to swap the url because im using same now
        let queue_url = std::env::var("QUEUE_URL")
            .map_err(|_| Error::from("QUEUE_URL environment variable not set"))?;

        let _result = client
            .send_message()
            .queue_url(queue_url)
            .message_body(message)
            .send()
            .await;

        //generate auth token
        //send response containing auth token
        //SECRET = JWT_SECRET
        //TODO Make the secret an environemnt variable
        let auth_token = create_jwt(&user, "JWT_SECRET")?;
        let cookie_value = format!("auth_token={}; HttpOnly; Secure; SameSite=Strict; Path=/", auth_token);
        // json_response(&ResponseBody{auth_token}, 201)
        let response = Response::builder()
            .status(201)
            .header(SET_COOKIE, HeaderValue::from_str(&cookie_value)?)
            .body(Body::from("created user"))?;

        Ok(response)
    }

    fn is_valid_field(field: &str, pattern: Regex) -> bool {
        pattern.is_match(field).unwrap_or(false)
    }