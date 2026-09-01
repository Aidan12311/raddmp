import json
import os
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource("dynamodb")
playlist_table = dynamodb.Table(os.environ["PLAYLIST_TABLE_NAME"])
playlist_music_table = dynamodb.Table(os.environ["PLAYLIST_MUSIC_TABLE_NAME"])


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

    removed = _delete_playlist_music(playlist_id)

    playlist_table.delete_item(Key={"PlaylistId": playlist_id})

    return _response(200, {
        "PlaylistId": playlist_id,
        "SongsRemoved": removed,
    })


def _delete_playlist_music(playlist_id):
    count = 0
    start_key = None

    while True:
        params = {
            "KeyConditionExpression": Key("PlaylistId").eq(playlist_id),
            "ProjectionExpression": "MusicId",
        }
        if start_key:
            params["ExclusiveStartKey"] = start_key

        result = playlist_music_table.query(**params)
        items = result.get("Items", [])

        if items:
            with playlist_music_table.batch_writer() as batch:
                for item in items:
                    batch.delete_item(
                        Key={"PlaylistId": playlist_id, "MusicId": item["MusicId"]}
                    )
                    count += 1

        start_key = result.get("LastEvaluatedKey")
        if not start_key:
            break

    return count


def _response(status_code, body):
    return {
        "statusCode": status_code,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(body, default=str),
    }