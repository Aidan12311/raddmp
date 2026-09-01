import json
import os
import boto3

dynamodb = boto3.resource("dynamodb")
playlist_table = dynamodb.Table(os.environ["PLAYLIST_TABLE_NAME"])
playlist_music_table = dynamodb.Table(os.environ["PLAYLIST_MUSIC_TABLE_NAME"])


def lambda_handler(event, context):
    authorizer = (event.get("requestContext") or {}).get("authorizer") or {}
    user_id = authorizer.get("sub")

    if not user_id:
        return _response(401, {"error": "Unauthorized"})

    params = event.get("pathParameters") or {}
    playlist_id = params.get("playlistId")
    music_id = params.get("musicId")

    if not playlist_id or not music_id:
        return _response(400, {"error": "Missing playlistId or musicId"})

    playlist = playlist_table.get_item(Key={"PlaylistId": playlist_id}).get("Item")
    if not playlist:
        return _response(404, {"error": "Playlist not found"})

    if playlist.get("UserId") != user_id:
        return _response(403, {"error": "Forbidden"})

    result = playlist_music_table.delete_item(
        Key={"PlaylistId": playlist_id, "MusicId": music_id},
        ReturnValues="ALL_OLD",
    )

    if "Attributes" not in result:
        return _response(404, {"error": "Music not in playlist"})

    return _response(200, {"PlaylistId": playlist_id, "MusicId": music_id})


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