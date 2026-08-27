"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";

import * as api from "./api";
import { useAnalyser } from "./audio";
import { PREVIEW, SAMPLE_TRACKS, SAMPLE_PLAYLISTS } from "./sample";

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

function getAudioDuration(path) {
  return new Promise((resolve) => {
    const audio = new Audio();
    audio.preload = "metadata";
    audio.onloadedmetadata = () => {
      resolve(Math.floor(audio.duration) || 0);
    };

    audio.onerror = () => resolve(0);
    audio.src = path;
  });
}

export function PlayerProvider({ children }) {
  // NOTE: Update this later, just for previewing the UI without a backend
  const [authed, setAuthed] = useState(false);
  const [plan, setPlan] = useState("premium");
  const [library, setLibrary] = useState(PREVIEW ? SAMPLE_TRACKS : []);
  const [playlists, setPlaylists] = useState(PREVIEW ? SAMPLE_PLAYLISTS : []);
  const [loading, setLoading] = useState(!PREVIEW);
  const [queue, setQueue] = useState([]);

  const [current, setCurrent] = useState(null);
  const [duration, setDuration] = useState(0);
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

  const eqRef = useRef(eq);
  useEffect(() => { eqRef.current = eq; }, [eq]);
  const { audioRef, resume, getAnalyser, setBandGain, setEffect } = useAnalyser(() => eqRef.current);
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
        if (!alive) {
          return;
        }

        setLibrary(tracks);
        setPlaylists(lists);
      } 
      finally {
        if (alive) {
          setLoading(false);
        }
      }  
    })();
  
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    if(!audioElement) {
      return;
    }

    const currTime = () => setElapsed(audioElement.currentTime);
    const onEnd = () => setPlaying(false);
    const onMeta = () => setDuration(audioElement.duration || 0);

    audioElement.addEventListener("timeupdate", currTime);
    audioElement.addEventListener("ended", onEnd);
    audioElement.addEventListener("loadedmetadata", onMeta);

    return () => {
      audioElement.removeEventListener("timeupdate", currTime);
      audioElement.removeEventListener("ended", onEnd);
      audioElement.removeEventListener("loadedmetadata", onMeta);
    };
  }, [audioRef]);

  useEffect(() => { 
    if (audioRef.current) {
      audioRef.current.volume = vol; 
    }
  }, [vol, audioRef]);
  
  useEffect(() => { 
    const c = () => setMenu(null); 
    
    window.addEventListener("click", c); 
    return () => window.removeEventListener("click", c); }, 
  []);

  const seek = (seconds) => {
    const audioElement = audioRef.current;
    if (!audioElement) {
      return;
    }

    audioElement.currentTime = seconds;
    setElapsed(seconds);
  };

  const handleAuth = async ({ email, password, plan: chosen, mode, username }) => {
      try {
      const user = await (mode === "signup"
        ? api.signup({ email, password, plan: chosen, username })
        : api.login({ username, password }));

      setPlan(user.plan || "basic");
      setAuthed(true);
    } catch (err) {
      // request() throws `Error(\`Request failed: ${res.status}\`)` on non-2xx responses
      if (err.message?.includes("401")) {
        notify(mode === "signup" ? "Could not create account" : "Invalid username or password");
      } else if (err.message?.includes("409")) {
        notify("An account with that username already exists");
      } else {
        notify("Something went wrong — please try again");
      }
      console.error(`${mode} failed:`, err);
    }
  };

  const playTrack = async (id) => {
    const track = library.find((track) => track.id === id);
    if(!track) {
      return;
    }

    if(!track.streamUrl) {
      notify("This track has no stream URL! Check your backend or upload a new track!");
      return;
    }

    const audioElement = audioRef.current;

    const isLoaded = current === id && audioElement.src && audioElement.src !== window.location.href;
    if (isLoaded) {
      await resume();
      await audioRef.current.play().catch(() => {});

      setPlaying(true);
      return;
    }

    // const { url } = await api.getStreamUrl(id);
    // audioRef.current.src = url;

    audioRef.current.src = track.streamUrl;
    setCurrent(id);
    setElapsed(0);

    await resume();
    await audioElement.play().catch(() => {});

    setPlaying(true);
  };

  const togglePlay = async () => {
    const audioElement = audioRef.current;
    if (!audioElement) {
      return;
    }

    if(playing) {
      audioElement.pause();
      setPlaying(false);
    } 
    else {
      await audioElement.play();
      setPlaying(true);
    }
  };

  const createPlaylist = async (name) => {
    // TODO: await api.createPlaylist(name); setPlaylists(await api.listPlaylists());
    setModal(null);
  };
  
  const uploadTrack = async ({ file, cover, title, artist }) => {
    const form = new FormData();
    form.append("file", file);
    if(cover) {
      form.append("cover", cover);
    }

    const res = await fetch("/api/upload", { method: "POST", body: form });
    if (!res.ok) {
      notify("Upload failed: " + (await res.text()));
      return;
    }
    
    const { filePath, coverPath } = await res.json();
    const duration = await getAudioDuration(filePath);

    setLibrary((prevLib) => [...prevLib, {
      id: "t" + Date.now(),
      title: title || file.name.replace(/\.[^/.]+$/, ""),
      artist: artist || "Unknown Artist",
      dur: duration,
      g1: "#67e8f9", g2: "#c084fc",
      streamUrl: filePath,
      cover: coverPath || null,
    }]);
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

  const setEqBand = (i, v) => {
    setEq((p) => p.map((x, xi) => (xi === i ? v : x))); 
    setBandGain(i, v);
  };

  const resetEq = () => {
    setEq([0, 0, 0, 0, 0]);
    for(let i = 0; i < 5; i++) {
      setBandGain(i, 0);
    }
  }

  const toggleFx = (key) => {
    setFx((effect) => {
      const newState = !effect[key];
      setEffect(key, newState);

      return { ...effect, [key]: newState };
    })
  };

const value = {
    authed, plan, isPremium, loading,
    library, playlists, queue,
    current, track, playing, elapsed, seek, duration,
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