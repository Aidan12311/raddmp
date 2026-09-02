import json
import os
import boto3

from cors import resolve_origin

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["TABLE_NAME"]) # Not done yet


def lambda_handler(event, context):
    path_params = event.get("pathParameters") or {}
    music_id = path_params.get("musicId")

    if not music_id:
        return _response(event, 400, {"error": "musicId is required in the path"})

    existing = table.get_item(Key={"MusicId": music_id}).get("Item")
    if not existing:
        return _response(event, 404, {"error": "Music not found"})

    table.delete_item(Key={"MusicId": music_id})

    return _response(event, 200, {"message": f"Music {music_id} deleted"})


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