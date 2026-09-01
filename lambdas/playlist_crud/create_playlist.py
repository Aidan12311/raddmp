import json
import os
import uuid
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["TABLE_NAME"])

REQUIRED_FIELDS = ["Name"]
BASIC_PLAYLIST_LIMIT = 3


def lambda_handler(event, context):
    authorizer = (event.get("requestContext") or {}).get("authorizer") or {}
    user_id = authorizer.get("sub")
    tier = authorizer.get("tier", "basic")

    if not user_id:
        return _response(401, {"error": "Unauthorized"})

    try:
        body = json.loads(event.get("body") or "{}")
    except json.JSONDecodeError:
        return _response(400, {"error": "Invalid JSON body"})

    missing = [f for f in REQUIRED_FIELDS if f not in body]
    if missing:
        return _response(400, {"error": f"Missing required fields: {missing}"})

    if tier != "premium":
        existing = table.query(
            IndexName="UserIdIndex",
            KeyConditionExpression=Key("UserId").eq(user_id),
            Select="COUNT",
        )
        if existing["Count"] >= BASIC_PLAYLIST_LIMIT:
            return _response(403, {
                "error": f"Basic plan is limited to {BASIC_PLAYLIST_LIMIT} playlists. Upgrade to premium."
            })

    playlist_id = str(uuid.uuid4())
    item = {
        "PlaylistId": playlist_id,
        "UserId": user_id,
        "Name": body["Name"],
    }

    table.put_item(Item=item)

    return _response(201, item)


def _response(status_code, body):
    return {
        "statusCode": status_code,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(body),
    }