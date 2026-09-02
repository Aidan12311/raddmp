import json
import os
import uuid
import boto3

from cors import resolve_origin

s3_client = boto3.client("s3")

MP3_BUCKET = os.environ["MP3_BUCKET"]  # Not Done
IMAGE_BUCKET = os.environ["IMAGE_BUCKET"]  # Not Done

VALID_FILE_TYPES = {
    "mp3": {"bucket": MP3_BUCKET, "content_type": "audio/mpeg"},
    "image": {"bucket": IMAGE_BUCKET, "content_type": None},
}

UPLOAD_EXPIRATION_SECONDS = 300


def lambda_handler(event, context):
    try:
        body = json.loads(event.get("body") or "{}")
    except json.JSONDecodeError:
        return _response(event, 400, {"error": "Invalid JSON body"})

    file_type = body.get("fileType")
    file_extension = body.get("fileExtension")

    if file_type not in VALID_FILE_TYPES:
        return _response(event, 400, {"error": f"fileType must be one of {list(VALID_FILE_TYPES.keys())}"})

    if not file_extension:
        return _response(event, 400, {"error": "fileExtension is required (e.g. 'mp3', 'png', 'jpg')"})

    bucket = VALID_FILE_TYPES[file_type]["bucket"]
    object_key = f"{file_type}/{uuid.uuid4()}.{file_extension}"

    presigned_url = s3_client.generate_presigned_url(
        ClientMethod="put_object",
        Params={"Bucket": bucket, "Key": object_key},
        ExpiresIn=UPLOAD_EXPIRATION_SECONDS,
    )

    final_object_url = f"https://{bucket}.s3.amazonaws.com/{object_key}"

    return _response(event, 200, {
        "uploadUrl": presigned_url,
        "fileUrl": final_object_url,
        "expiresInSeconds": UPLOAD_EXPIRATION_SECONDS,
    })


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