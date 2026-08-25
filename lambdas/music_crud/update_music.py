import json
import os
import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["TABLE_NAME"]) # Not done yet

UPDATABLE_FIELDS = ["Title", "Artists", "Length", "CoverImage", "Mp3File"]


def lambda_handler(event, context):
    path_params = event.get("pathParameters") or {}
    music_id = path_params.get("musicId")

    if not music_id:
        return _response(400, {"error": "musicId is required in the path"})

    try:
        body = json.loads(event.get("body") or "{}")
    except json.JSONDecodeError:
        return _response(400, {"error": "Invalid JSON body"})

    updates = {k: v for k, v in body.items() if k in UPDATABLE_FIELDS}
    if not updates:
        return _response(400, {"error": f"No valid fields to update. Allowed: {UPDATABLE_FIELDS}"})

    existing = table.get_item(Key={"MusicId": music_id}).get("Item")
    if not existing:
        return _response(404, {"error": "Music not found"})

    update_expr_parts = []
    expr_attr_names = {}
    expr_attr_values = {}
    for field, value in updates.items():
        placeholder_name = f"#{field}"
        placeholder_value = f":{field}"
        update_expr_parts.append(f"{placeholder_name} = {placeholder_value}")
        expr_attr_names[placeholder_name] = field
        expr_attr_values[placeholder_value] = value

    table.update_item(
        Key={"MusicId": music_id},
        UpdateExpression="SET " + ", ".join(update_expr_parts),
        ExpressionAttributeNames=expr_attr_names,
        ExpressionAttributeValues=expr_attr_values,
    )

    updated_item = table.get_item(Key={"MusicId": music_id}).get("Item")
    return _response(200, updated_item)


def _response(status_code, body):
    return {
        "statusCode": status_code,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(body),
    }