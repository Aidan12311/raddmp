const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";
const MUSIC_ENDPOINT = process.env.NEXT_PUBLIC_API_MUSIC_ENDPOINT || "/music";
const PLAYLIST_ENDPOINT = process.env.NEXT_PUBLIC_API_PLAYLIST_ENDPOINT || "/playlists";

function toLength(seconds) {
  const minutes = Math.floor(seconds / 60);
  const leftoverSeconds = Math.floor(seconds % 60);

  return `${minutes}:${String(leftoverSeconds).padStart(2, "0")}`;
}

async function request(path, options = {}) {
  const url = path.startsWith("http") ? path : `${API_BASE}${path}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
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

function toPlaylist(playlistJson) {
  return {
    id: playlistJson.PlaylistId,
    name: playlistJson.Name,
    tracks: [],
  };
}

export async function listTracks() {
  const res = await request(MUSIC_ENDPOINT);
  return (res.items ?? []).map(toTrack);
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
  }).then(toTrack);

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

export async function listPlaylists() {
  const res = await request(PLAYLIST_ENDPOINT);
  return (res.playlists ?? []).map(toPlaylist);
}

export async function listPlaylistTracks(playlistId) {
  const res = await request(`${PLAYLIST_ENDPOINT}/${playlistId}/music`);
  return (res.music ?? []).map(toTrack);
}

export const createPlaylist = (name) =>
  request(PLAYLIST_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ Name: name }),
  }).then(toPlaylist);

export const renamePlaylist = (playlistId, name) =>
  request(`${PLAYLIST_ENDPOINT}/${playlistId}`, {
    method: "PUT",
    body: JSON.stringify({ Name: name }),
  }).then(toPlaylist);

export const deletePlaylist = (playlistId) =>
  request(`${PLAYLIST_ENDPOINT}/${playlistId}`, { method: "DELETE" });

export const addTrackToPlaylist = (playlistId, trackId) =>
  request(`${PLAYLIST_ENDPOINT}/${playlistId}/music`, {
    method: "POST",
    body: JSON.stringify({ MusicId: trackId }),
  });

export const removeTrackFromPlaylist = (playlistId, trackId) =>
  request(`${PLAYLIST_ENDPOINT}/${playlistId}/music/${trackId}`, {
    method: "DELETE",
  });

export const login = (body) =>
  request("/login", { method: "POST", body: JSON.stringify(body) });

export const signup = (body) =>
  request("/users", { method: "POST", body: JSON.stringify(body) });

export const getUser = () => request("/users", { method: "GET" });