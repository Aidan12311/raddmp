import json
import os
import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["TABLE_NAME"]) # Not done yet


def lambda_handler(event, context):
    path_params = event.get("pathParameters") or {}
    music_id = path_params.get("musicId")

    if not music_id:
        return _response(400, {"error": "musicId is required in the path"})

    existing = table.get_item(Key={"MusicId": music_id}).get("Item")
    if not existing:
        return _response(404, {"error": "Music not found"})

    table.delete_item(Key={"MusicId": music_id})

    return _response(200, {"message": f"Music {music_id} deleted"})


def _response(status_code, body):
    return {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Credentials": "true",
        },
        "body": json.dumps(body),
    }