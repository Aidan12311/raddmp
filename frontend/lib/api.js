const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";
const MUSIC_ENDPOINT = process.env.NEXT_PUBLIC_API_MUSIC_ENDPOINT || "/music";

function toLength(seconds) {
  const minutes = Math.floor(seconds / 60);
  const leftoverSeconds = Math.floor(seconds % 60);

  return `${minutes}:${String(leftoverSeconds).padStart(2, "0")}`;
}

async function request(path, options = {}) {
  const url = path.startsWith("http") ? path : `${API_BASE}${path}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    // credentials: "include",
    ...options,
  });
  if (!res.ok) {
    const errorText = await res.text().catch(() => "");
    throw new Error(errorText || `Request failed: ${res.status}`);
  }
  return res.status === 204 ? null : res.json();
}

function toTrack(musicJson) {
  const parseDuration = (durationStr) => {
    if (typeof durationStr !== "string" || !durationStr.includes(":")) return 0;

    const[minutes, seconds] = durationStr.split(":").map(Number);
    return (minutes || 0) * 60 + (seconds || 0);
  };

  return {
    id: musicJson.MusicId,
    title: musicJson.Title,
    artist: musicJson.Artists,
    dur: parseDuration(musicJson.Length),
    streamUrl: musicJson.Mp3File && musicJson.Mp3File !== "none" ? musicJson.Mp3File : null,
    cover: musicJson.CoverImage && musicJson.CoverImage !== "none" ? musicJson.CoverImage : null,
    g1: "#67e8f9", g2: "#c084fc",
  };
}

export async function listTracks() {
  const tracks = await request(MUSIC_ENDPOINT);
  return Array.isArray(tracks) ? tracks.map(toTrack) : [];
}

export async function getTrack(id) {
  const track = await request(`${MUSIC_ENDPOINT}/${id}`);
  return toTrack(track);
}

export const createTrack = ( {title, artist, durationSec, mp3Url, coverUrl }) => 
  request(MUSIC_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      Title: title,
      Artists: artist,
      Length: toLength(durationSec),
      Mp3File: mp3Url || "none",
      CoverImage: coverUrl || "none"
    }),
  });

export const updateTrack = (id, fields) =>
  request(`${MUSIC_ENDPOINT}/${id}`, {
    method: "PUT",
    body: JSON.stringify(fields),
  });

export const deleteTrack = (id) =>
  request(`${MUSIC_ENDPOINT}/${id}`, { method: "DELETE" });

export const getUploadUrl = (fileType, fileExtension) =>
  request(`${MUSIC_ENDPOINT}/upload-url`, {
    method: "POST",
    body: JSON.stringify({ fileType, fileExtension })
  });

export async function uploadFile(file, fileType) {
  const fileExtension = file.name.split(".").pop().toLowerCase();
  const { uploadUrl, fileUrl } = await getUploadUrl(fileType, fileExtension);

  const putCall = await fetch(uploadUrl, {
    method: "PUT",
    headers: { "Content-Type" : file.type },
    body: file
  });
  
  if (!putCall.ok) {
    throw new Error(`S3 upload failed! Error status code: ${putCall.status}`);
  }

  return fileUrl;
}

export async function listPlaylists() { return []; }

export const login = (body) => 
  request(`${API_BASE}/login`, { method: "POST", body: JSON.stringify(body) });

export const signup = (body) => 
  request(`${API_BASE}/users`, { method: "POST", body: JSON.stringify(body) });
