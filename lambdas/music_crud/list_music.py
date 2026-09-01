import json
import os
import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["TABLE_NAME"]) # Not done yet


def lambda_handler(event, context):
    result = table.scan()
    items = result.get("Items", [])

    return _response(200, {"items": items, "count": len(items)})


def _response(status_code, body):
    return {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Credentials": "true",
        },
        "body": json.dumps(body, default=str),
    }