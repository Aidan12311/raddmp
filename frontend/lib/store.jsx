"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useAnalyser } from "./audio";
import { PREVIEW, SAMPLE_TRACKS, SAMPLE_PLAYLISTS } from "./sample";
import * as api from "./api";

/* ════════════════════════════════════════════════════════════════════════════
   The app store (client).

   Holds everything that must OUTLIVE navigation: the playing track, playlists,
   library, queue, auth, EQ/effects. Mounted once in app/layout.jsx, ABOVE the
   router, so moving between /, /search, /playlist/[id] never stops playback.

   DATA LOADING: this store loads the library + playlists once, in the browser,
   with useEffect (see below). The very first page shows a brief "Loading…";
   after that every navigation is instant because the data already lives here.

   Every ACTION is an inert stub. Fill each with a call to lib/api.js — the exact
   line is written in a comment right there. See README → "Connecting a backend".
   ────────────────────────────────────────────────────────────────────────── */

const PlayerContext = createContext(null);
export const usePlayer = () => useContext(PlayerContext);

export function PlayerProvider({ children }) {
  const [authed, setAuthed] = useState(PREVIEW);
  const [plan, setPlan] = useState("basic");
  const [library, setLibrary] = useState(PREVIEW ? SAMPLE_TRACKS : []);
  const [playlists, setPlaylists] = useState(PREVIEW ? SAMPLE_PLAYLISTS : []);
  const [loading, setLoading] = useState(!PREVIEW);
  const [queue, setQueue] = useState([]);

  const [current, setCurrent] = useState(PREVIEW ? (SAMPLE_TRACKS[0]?.id ?? null) : null);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [eq, setEq] = useState([0, 0, 0, 0, 0]);
  const [fx, setFx] = useState({ distortion: false, chorus: false, reverb: false });
  const [vol, setVol] = useState(0.8);

  const [modal, setModal] = useState(null);
  const [menu, setMenu] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [toast, setToast] = useState(null);
  const notify = (m) => { setToast(m); setTimeout(() => setToast(null), 2600); };

  const { audioRef, resume, getAnalyser } = useAnalyser();
  const isPremium = plan === "premium";
  const track = library.find((t) => t.id === current) || null;

  /* ── INITIAL DATA LOAD (client-side). Runs once, after first paint. ──────
     With no backend configured, api.* returns [] so the app just shows empty
     lists. Point NEXT_PUBLIC_API_BASE at your backend and this fills in. ── */
  useEffect(() => {
    if (PREVIEW) { setLoading(false); return; }
    let alive = true;
    (async () => {
      try {
        const [tracks, lists] = await Promise.all([api.listTracks(), api.listPlaylists()]);
        if (!alive) return;
        setLibrary(tracks);
        setPlaylists(lists);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (!playing || !track) return;
    const id = setInterval(() => setElapsed((e) => (e + 1 > track.dur ? 0 : e + 1)), 1000);
    return () => clearInterval(id);
  }, [playing, track]);
  useEffect(() => { if (audioRef.current) audioRef.current.volume = vol; }, [vol, audioRef]);
  useEffect(() => { const c = () => setMenu(null); window.addEventListener("click", c); return () => window.removeEventListener("click", c); }, []);

  /* ═══ CONNECT THESE — inert stubs. Fill with lib/api.js calls. ═══════════ */

  const handleAuth = async ({ email, password, plan: chosen, mode }) => {
    // TODO: const user = await (mode === "signup"
    //   ? api.signup({ email, password, plan: chosen })
    //   : api.login({ email, password }));
    // setPlan(user.plan); setAuthed(true);
  };

  const playTrack = (id) => {
    // TODO: const t = library.find((x) => x.id === id);
    //       audioRef.current.src = t.streamUrl; resume(); audioRef.current.play();
    //       setCurrent(id); setElapsed(0); setPlaying(true);
  };
  const togglePlay = () => {
    // TODO: playing ? audioRef.current.pause() : audioRef.current.play();
    //       setPlaying(!playing);
  };

  const createPlaylist = async (name) => {
    // TODO: await api.createPlaylist(name); setPlaylists(await api.listPlaylists());
    setModal(null);
  };
  const uploadTrack = async (data) => {
    // TODO: await api.uploadTrack(data); setLibrary(await api.listTracks());
    setModal(null);
  };
  const addToPlaylist = async (trackId, playlistId) => {
    // TODO: await api.addTrackToPlaylist(playlistId, trackId); setPlaylists(await api.listPlaylists());
  };
  const removeFromPlaylist = async (trackId, playlistId) => {
    // TODO: await api.removeTrackFromPlaylist(playlistId, trackId); setPlaylists(await api.listPlaylists());
  };
  const addToQueue = (trackId) => { setQueue((q) => [...q, trackId]); };
  const shareLink = async () => {
    // TODO: const { shareUrl } = await api.createListeningLink(current);
    //       navigator.clipboard.writeText(shareUrl); notify("Link copied");
  };
  const upgrade = () => { /* TODO: send the user to your checkout / upgrade flow */ };

  const setEqBand = (i, v) => setEq((p) => p.map((x, xi) => (xi === i ? v : x))); // TODO: send to DSP
  const resetEq = () => setEq([0, 0, 0, 0, 0]);
  const toggleFx = (key) => setFx((f) => ({ ...f, [key]: !f[key] }));             // TODO: send to DSP

const value = {
    authed, plan, isPremium, loading,
    library, playlists, queue,
    current, track, playing, elapsed,
    eq, fx, vol, setVol,
    modal, openModal: setModal, closeModal: () => setModal(null),
    menu, openMenu: (trackId, e) => { e.stopPropagation(); setMenu({ trackId, x: e.clientX, y: e.clientY }); }, closeMenu: () => setMenu(null),
    expanded, expand: () => setExpanded(true), collapse: () => setExpanded(false),
    audioRef, getAnalyser, toast, notify,
    handleAuth, playTrack, togglePlay, createPlaylist, uploadTrack,
    addToPlaylist, removeFromPlaylist, addToQueue, shareLink, upgrade,
    setEqBand, resetEq, toggleFx,
};

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}