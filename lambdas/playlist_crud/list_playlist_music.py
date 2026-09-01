import json
import os
import boto3
from boto3.dynamodb.conditions import Key
from decimal import Decimal


dynamodb = boto3.resource("dynamodb")
playlist_table = dynamodb.Table(os.environ["PLAYLIST_TABLE_NAME"])
playlist_music_table = dynamodb.Table(os.environ["PLAYLIST_MUSIC_TABLE_NAME"])
music_table_name = os.environ["MUSIC_TABLE_NAME"]

BATCH_GET_LIMIT = 100


def lambda_handler(event, context):
    authorizer = (event.get("requestContext") or {}).get("authorizer") or {}
    user_id = authorizer.get("sub")

    if not user_id:
        return _response(401, {"error": "Unauthorized"})

    playlist_id = (event.get("pathParameters") or {}).get("playlistId")
    if not playlist_id:
        return _response(400, {"error": "Missing playlistId"})

    playlist = playlist_table.get_item(Key={"PlaylistId": playlist_id}).get("Item")
    if not playlist:
        return _response(404, {"error": "Playlist not found"})

    if playlist.get("UserId") != user_id:
        return _response(403, {"error": "Forbidden"})

    entries = playlist_music_table.query(
        KeyConditionExpression=Key("PlaylistId").eq(playlist_id),
    ).get("Items", [])

    if not entries:
        return _response(200, {"music": []})

    order_by_id = {e["MusicId"]: e.get("Order", 0) for e in entries}
    music_by_id = _batch_get_music(list(order_by_id.keys()))

    music = []
    for music_id, order in order_by_id.items():
        item = music_by_id.get(music_id)
        if item is None:
            continue
        item["Order"] = order
        music.append(item)

    music.sort(key=lambda m: m["Order"])

    return _response(200, {"music": music})


def _batch_get_music(music_ids):
    found = {}

    for i in range(0, len(music_ids), BATCH_GET_LIMIT):
        chunk = music_ids[i:i + BATCH_GET_LIMIT]
        request = {
            music_table_name: {
                "Keys": [{"MusicId": mid} for mid in chunk]
            }
        }

        while request:
            result = dynamodb.batch_get_item(RequestItems=request)
            for item in result.get("Responses", {}).get(music_table_name, []):
                found[item["MusicId"]] = item
            request = result.get("UnprocessedKeys") or None

    return found


def _decimal_default(obj):
    if isinstance(obj, Decimal):
        return int(obj) if obj % 1 == 0 else float(obj)
    raise TypeError(f"Not JSON serializable: {type(obj)}")


def _response(status_code, body):
    return {
        "statusCode": status_code,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(body, default=_decimal_default),
    }