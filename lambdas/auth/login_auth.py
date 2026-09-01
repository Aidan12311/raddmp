# Dependencies:
#     pip install pyjwt
#
# This is an API Gateway Lambda REQUEST authorizer (see the template's
# Auth: Authorizers: RaddAuthorizer block). It runs in front of protected
# routes (e.g. GET /users) BEFORE the target Lambda. It does NOT log
# anyone in -- that's the Rust `Login` function's job. This function only
# answers one question: "does the Authorization header carry a JWT that
# was legitimately issued by Login, and is it still valid?"
#
# Because all the claims we need (sub, tier, exp) are already embedded in
# the token itself, this function never touches DynamoDB -- it just
# verifies the signature/expiry and forwards the claims to whichever
# Lambda runs next via the authorizer "context".

import os
import jwt  # PyJWT

# Must be the SAME secret value the Rust Login function signs tokens
# with (see template Parameters: JwtSecret, referenced by both
# AuthFunction and Login's Environment).
JWT_SECRET = os.environ["JWT_SECRET"]
JWT_ALGORITHM = "HS256"


def _get_header(headers: dict, name: str):
    # API Gateway can deliver header keys in whatever case the client
    # sent them, so look up case-insensitively.
    for key, value in (headers or {}).items():
        if key.lower() == name.lower():
            return value
    return None


def _extract_from_cookie(cookie_header: str):
    # Login ships the token as an HttpOnly cookie (auth_token=...), which
    # means browser JS can never read it back out to set an Authorization
    # header manually -- the browser just resends it as a Cookie header
    # automatically on every request. So this is the primary path for
    # browser clients.
    if not cookie_header:
        return None

    for part in cookie_header.split(";"):
        part = part.strip()
        if part.startswith("auth_token="):
            return part[len("auth_token="):].strip()

    return None


def _extract_token(headers: dict):
    # Prefer an explicit Authorization header (useful for non-browser
    # clients like server-to-server calls, curl, Postman), falling back
    # to the auth_token cookie that Login actually issues to browsers.
    auth_header = _get_header(headers, "authorization")
    if auth_header:
        if auth_header.lower().startswith("bearer "):
            return auth_header[len("bearer "):].strip()
        return auth_header.strip()

    cookie_header = _get_header(headers, "cookie")
    return _extract_from_cookie(cookie_header)


def _build_allow_policy(principal_id: str, method_arn: str, claims: dict):
    return {
        "principalId": principal_id,
        "policyDocument": {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Action": "execute-api:Invoke",
                    "Effect": "Allow",
                    "Resource": method_arn.split("/")[0] + "/*",
                }
            ],
        },
        # Flat string/number/bool values only -- API Gateway does not
        # support nested objects in authorizer context. Downstream
        # Lambdas read these via event["requestContext"]["authorizer"].
        "context": {
            "sub": str(claims["sub"]),
            "tier": str(claims.get("tier", "basic")),
        },
    }


# Lambda entry point (API Gateway REQUEST authorizer, REST API / v1 format)
def lambda_handler(event, context):
    method_arn = event.get("methodArn")
    token = _extract_token(event.get("headers"))

    if not token:
        # No Authorization header at all -> API Gateway maps a thrown
        # error from an authorizer to 401 Unauthorized.
        raise Exception("Unauthorized")

    try:
        claims = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
    except jwt.ExpiredSignatureError:
        raise Exception("Unauthorized")
    except jwt.InvalidTokenError:
        raise Exception("Unauthorized")

    return _build_allow_policy(
        principal_id=str(claims["sub"]),
        method_arn=method_arn,
        claims=claims,
    )