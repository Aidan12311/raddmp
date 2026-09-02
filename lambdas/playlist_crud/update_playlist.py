import json
import os
import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["TABLE_NAME"])


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

    name = body.get("Name")
    if not name:
        return _response(400, {"error": "Missing required fields: ['Name']"})

    playlist = table.get_item(Key={"PlaylistId": playlist_id}).get("Item")
    if not playlist:
        return _response(404, {"error": "Playlist not found"})

    if playlist.get("UserId") != user_id:
        return _response(403, {"error": "Forbidden"})

    result = table.update_item(
        Key={"PlaylistId": playlist_id},
        UpdateExpression="SET #n = :name",
        ExpressionAttributeNames={"#n": "Name"},
        ExpressionAttributeValues={":name": name},
        ReturnValues="ALL_NEW",
    )

    return _response(200, result["Attributes"])


def _response(status_code, body):
    return {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://main.d3hoq6y7t1r914.amplifyapp.com",
            "Access-Control-Allow-Credentials": True,
        },
        "body": json.dumps(body, default=str),
    }