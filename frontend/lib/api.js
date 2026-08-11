/* ════════════════════════════════════════════════════════════════════════════
   lib/api.js  —  THE DATA SEAM  (plain HTTP calls to your backend)

   Every network call the app makes lives here, and nowhere else. Each function
   is a normal `fetch` to one of your backend's URLs. There is no GraphQL and no
   proxy — the browser (or the server, during SSR) calls your API directly.

   POINT IT AT YOUR BACKEND ───────────────────────────────────────────────────
   In .env.local set:
     NEXT_PUBLIC_API_BASE=https://api.raddmp.example.com

   The paths below ("/tracks", "/playlists", …) are examples — rename them to
   match whatever your backend actually exposes. The rest of the app never
   changes; it only knows these function names.

   Notes:
   • Browser → backend calls need CORS headers on your backend.
   • Server → backend calls (SSR, from app/layout.jsx) do NOT.
   • While NEXT_PUBLIC_API_BASE is unset (or PREVIEW is on) the read functions
     return empty/sample data, so the app runs with no backend and never errors.
════════════════════════════════════════════════════════════════════════════ */

import { PREVIEW, SAMPLE_TRACKS, SAMPLE_PLAYLISTS } from "./sample";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";

// tiny wrapper so every call sends/parses JSON the same way
async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    credentials: "include", // sends the auth cookie on browser calls
    ...options,
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
}

/* ── reads (used by SSR + the UI). Safe to call with no backend. ─────────── */
export async function listTracks() {
  if (PREVIEW) return SAMPLE_TRACKS;
  if (!API_BASE) return [];
  try { return await request("/tracks"); } catch { return []; }
}

export async function listPlaylists() {
  if (PREVIEW) return SAMPLE_PLAYLISTS;
  if (!API_BASE) return [];
  try { return await request("/playlists"); } catch { return []; }
}

export async function searchTracks(query) {
  if (PREVIEW) return SAMPLE_TRACKS.filter((t) => (t.title + t.artist).toLowerCase().includes(query.toLowerCase()));
  if (!API_BASE) return [];
  return request(`/tracks?q=${encodeURIComponent(query)}`);
}

/* ── writes (called from the store's action stubs once you wire them) ────── */
export const login = (body) => request("/auth/login", { method: "POST", body: JSON.stringify(body) });
export const signup = (body) => request("/auth/signup", { method: "POST", body: JSON.stringify(body) });

// For the file itself: ask your backend for a pre-signed upload URL, PUT the
// file to storage, then POST the metadata here.
export const uploadTrack = (body) => request("/tracks", { method: "POST", body: JSON.stringify(body) });

export const createPlaylist = (name) => request("/playlists", { method: "POST", body: JSON.stringify({ name }) });
export const addTrackToPlaylist = (playlistId, trackId) => request(`/playlists/${playlistId}/tracks`, { method: "POST", body: JSON.stringify({ trackId }) });
export const removeTrackFromPlaylist = (playlistId, trackId) => request(`/playlists/${playlistId}/tracks/${trackId}`, { method: "DELETE" });

export const createListeningLink = (trackId) => request("/sessions", { method: "POST", body: JSON.stringify({ trackId }) });