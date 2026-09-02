import json
import os
import boto3

from cors import resolve_origin

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["TABLE_NAME"]) # Not Done


def lambda_handler(event, context):
    path_params = event.get("pathParameters") or {}
    music_id = path_params.get("musicId")

    if not music_id:
        return _response(event, 400, {"error": "musicId is required in the path"})

    result = table.get_item(Key={"MusicId": music_id})
    item = result.get("Item")

    if not item:
        return _response(event, 404, {"error": "Music not found"})

    return _response(event, 200, item)


def _response(event, status_code, body):
    return {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": resolve_origin(event),
            "Access-Control-Allow-Credentials": "true",
            "Vary": "Origin",
        },
        "body": json.dumps(body, default=str),
    }