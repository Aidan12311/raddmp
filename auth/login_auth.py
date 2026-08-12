# Dependencies:
#     pip install pyjwt boto3

import os
import json
import hashlib
import time
import jwt          # PyJWT
import boto3

# Configuration - pull secrets/config from environment variables, never
# hardcode them. In AWS, set these as Lambda environment variables.
JWT_SECRET = os.environ["JWT_SECRET"]          # signing key, keep this private
JWT_ALGORITHM = "HS256"
TOKEN_LIFETIME_SECONDS = 60 * 60                # 1 hour access window
USERS_TABLE_NAME = os.environ.get("USERS_TABLE", "User")

dynamodb = boto3.resource("dynamodb")
users_table = dynamodb.Table(USERS_TABLE_NAME)


# Verify user credentials
def hash_password(password: str) -> str:
    # return the SHA-256 hash of the password as a hex string. This is a simple
    return hashlib.sha256(password.encode("utf-8")).hexdigest()


def get_user_by_email(email: str):
    # Fetch a single user record from DynamoDB by email.

    # Assumes 'email' is either the partition key or backed by a
    # Global Secondary Index (GSI) named 'email-index'. If email is
    # NOT your partition key, query the GSI instead of using get_item.
    response = users_table.query(
        IndexName="email-index",
        KeyConditionExpression=boto3.dynamodb.conditions.Key("Email").eq(email),
        Limit=1,
    )
    items = response.get("Items", [])
    return items[0] if items else None


def verify_credentials(email: str, password: str):
    # Verify a login attempt.

    # Returns the user record on success, or None on failure.
    # Deliberately returns None (not a specific reason) for both
    # "user not found" and "wrong password" -- this prevents leaking
    # which emails are registered (a common security best practice).
    user = get_user_by_email(email)
    if user is None:
        return None

    submitted_hash = hash_password(password)
    if submitted_hash != user["Password"]:
        return None

    return user


# Create the JWT
def create_jwt(user: dict) -> str:
    # Build and sign a JWT for an authenticated user.

    # Payload carries everything a downstream Lambda needs to authorize
    # a request WITHOUT hitting the database again:
    #     - sub  : user id (subject)
    #     - tier : "basic" or "premium" -> drives role-based access checks
    #     - iat  : issued-at timestamp
    #     - exp  : expiration timestamp (checked automatically by jwt.decode)
    now = int(time.time())
    payload = {
        "sub": user["Id"],
        "tier": user.get("Tier", "basic"),
        "iat": now,
        "exp": now + TOKEN_LIFETIME_SECONDS,
    }
    token = jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)
    return token


# Wrap the JWT in a cookie header
def build_set_cookie_header(token: str) -> str:
    # Build the Set-Cookie header value that ships the JWT to the browser.

    # Flags used here and why:
    #     HttpOnly  - JavaScript on the frontend can NEVER read this cookie,
    #                 which blocks token theft via XSS
    #     Secure    - cookie is only ever sent over HTTPS
    #     SameSite  - blocks other sites from riding the user's session
    #                 (CSRF protection); Strict is safest, use Lax if you
    #                 need the cookie to survive top-level navigation from
    #                 an external link
    #     Max-Age   - tells the browser when to drop the cookie; keep this
    #                 in sync with TOKEN_LIFETIME_SECONDS
    #     Path      - which routes the cookie gets sent on ("/" = all)
    return (
        f"authToken={token}; "
        f"HttpOnly; "
        f"Secure; "
        f"SameSite=Strict; "
        f"Max-Age={TOKEN_LIFETIME_SECONDS}; "
        f"Path=/"
    )


# Lambda entry point (API Gateway proxy integration)
def lambda_handler(event, context):
    # Expects a JSON body: { "email": "...", "password": "..." }

    # On success: 200 with Set-Cookie header attached and a small JSON
    # body confirming login (no token in the body -- it only lives in
    # the cookie).
    # On failure: 401 with a generic error message.
    try:
        body = json.loads(event.get("body") or "{}")
        email = body.get("email", "").strip().lower()
        password = body.get("password", "")
    except (json.JSONDecodeError, AttributeError):
        return _response(400, {"error": "Malformed request body"})

    if not email or not password:
        return _response(400, {"error": "Email and password are required"})

    user = verify_credentials(email, password)
    if user is None:
        # Same message for "no such user" and "wrong password" on purpose
        return _response(401, {"error": "Invalid email or password"})

    token = create_jwt(user)
    cookie_header = build_set_cookie_header(token)

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Set-Cookie": cookie_header,
        },
        "body": json.dumps({"message": "Login successful"}),
    }


def _response(status_code: int, body: dict):
    # Small helper so error responses share the same shape.
    return {
        "statusCode": status_code,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(body),
    }
