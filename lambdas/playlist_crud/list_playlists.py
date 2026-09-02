import json
import os
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["TABLE_NAME"])


def lambda_handler(event, context):
    authorizer = (event.get("requestContext") or {}).get("authorizer") or {}
    user_id = authorizer.get("sub")

    if not user_id:
        return _response(401, {"error": "Unauthorized"})

    result = table.query(
        IndexName="UserIdIndex",
        KeyConditionExpression=Key("UserId").eq(user_id),
    )

    return _response(200, {"playlists": result.get("Items", [])})


def _response(status_code, body):
    return {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://main.d3hoq6y7t1r914.amplifyapp.com",
            "Access-Control-Allow-Credentials": True,
        },
        "body": json.dumps(body),
    }