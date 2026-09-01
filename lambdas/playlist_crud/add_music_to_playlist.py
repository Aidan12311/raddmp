import json
import os
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource("dynamodb")
playlist_table = dynamodb.Table(os.environ["PLAYLIST_TABLE_NAME"])
playlist_music_table = dynamodb.Table(os.environ["PLAYLIST_MUSIC_TABLE_NAME"])
music_table = dynamodb.Table(os.environ["MUSIC_TABLE_NAME"])


def lambda_handler(event, context):
    authorizer = (event.get("requestContext") or {}).get("authorizer") or {}
    user_id = authorizer.get("sub")

    if not user_id:
        return _response(401, {"error": "Unauthorized"})

    playlist_id = (event.get("pathParameters") or {}).get("playlistId")
    if not playlist_id:
        return _response(400, {"error": "Missing playlistId"})

    try:
        body = json.loads(event.get("body") or "{}")
    except json.JSONDecodeError:
        return _response(400, {"error": "Invalid JSON body"})

    music_id = body.get("MusicId")
    if not music_id:
        return _response(400, {"error": "Missing required fields: ['MusicId']"})

    playlist = playlist_table.get_item(Key={"PlaylistId": playlist_id}).get("Item")
    if not playlist:
        return _response(404, {"error": "Playlist not found"})

    if playlist.get("UserId") != user_id:
        return _response(403, {"error": "Forbidden"})

    if "Item" not in music_table.get_item(Key={"MusicId": music_id}):
        return _response(404, {"error": "Music not found"})

    entries = playlist_music_table.query(
        KeyConditionExpression=Key("PlaylistId").eq(playlist_id),
        ProjectionExpression="#o",
        ExpressionAttributeNames={"#o": "Order"},
    ).get("Items", [])

    next_order = max((int(e.get("Order", 0)) for e in entries), default=-1) + 1

    item = {
        "PlaylistId": playlist_id,
        "MusicId": music_id,
        "Order": next_order,
    }

    playlist_music_table.put_item(Item=item)

    return _response(201, item)


def _response(status_code, body):
    return {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Credentials": True,
        },
        "body": json.dumps(body, default=str),
    }