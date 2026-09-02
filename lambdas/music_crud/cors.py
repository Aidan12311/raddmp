# Origins allowed to make credentialed cross-origin requests to this API.
# The first entry is used as the fallback when the request has no (or an
# unrecognized) Origin header.
ALLOWED_ORIGINS = (
    "https://main.d3hoq6y7t1r914.amplifyapp.com",
    "http://localhost:3000",
)


def resolve_origin(event):
    """
    Picks the Access-Control-Allow-Origin value for a request: echoes back
    the request's Origin header if it's in the allow-list, otherwise falls
    back to the first allowed origin. Access-Control-Allow-Origin can only
    ever hold a single value when credentials are involved, so this can't
    just be a static multi-origin string.
    """
    headers = (event or {}).get("headers") or {}
    origin = next((v for k, v in headers.items() if k.lower() == "origin"), None)
    return origin if origin in ALLOWED_ORIGINS else ALLOWED_ORIGINS[0]
