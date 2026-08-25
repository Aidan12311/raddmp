import json
import os
import uuid
import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["TABLE_NAME"])  ### Dont Know Yet

REQUIRED_FIELDS = ["Title", "Artists", "Length", "CoverImage", "Mp3File"]


def lambda_handler(event, context):
    try:
        body = json.loads(event.get("body") or "{}")
    except json.JSONDecodeError:
        return _response(400, {"error": "Invalid JSON body"})

    missing = [f for f in REQUIRED_FIELDS if f not in body]
    if missing:
        return _response(400, {"error": f"Missing required fields: {missing}"})

    music_id = str(uuid.uuid4())
    item = {
        "MusicId": music_id,
        "Title": body["Title"],
        "Artists": body["Artists"],
        "Length": body["Length"],
        "CoverImage": body["CoverImage"],
        "Mp3File": body["Mp3File"],
    }

    table.put_item(Item=item)

    return _response(201, item)


def _response(status_code, body):
    return {
        "statusCode": status_code,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(body),
    }
