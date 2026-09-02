import json
import os
import boto3

from cors import resolve_origin

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["TABLE_NAME"]) # Not done yet


def lambda_handler(event, context):
    result = table.scan()
    items = result.get("Items", [])

    return _response(event, 200, {"items": items, "count": len(items)})


def _response(event, status_code, body):
    return {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": resolve_origin(event),
            "Access-Control-Allow-Credentials": "true",
            "Vary": "Origin",
        },
        "body": json.dumps(body),
    }