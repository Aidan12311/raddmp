"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";

import * as api from "./api";
import { useAnalyser } from "./audio";
import { PLAN_LIMITS } from "./plans";

const PlayerContext = createContext(null);
export const usePlayer = () => useContext(PlayerContext);

export function PlayerProvider({ children }) {
  const [authed, setAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [plan, setPlan] = useState("premium");
  const [library, setLibrary] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

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
  const limits = PLAN_LIMITS[plan] ?? PLAN_LIMITS.basic;

  const track = library.find((t) => t.id === current) || null;

  useEffect(() => {
    let alive = true;

    (async () => {
      const [sessionResult, libraryResult] = await Promise.allSettled([
        api.getUser(),
        api.listTracks(),
      ]);

      if (!alive) return;

      if (sessionResult.status === "fulfilled") {
        const user = sessionResult.value;
        setUsername(user.username);
        setPlan(user.has_basic_plan ? "basic" : "premium");
        setAuthed(true);
      }

      if (libraryResult.status === "fulfilled") {
        setLibrary(libraryResult.value);
      } else {
        console.error("Failed to load library! Error: ", libraryResult.reason);
      }

      setLoading(false);
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

  // function validateFields({ mode, username, email, password }) {
  //   const errs = {};
  //   if (!username.trim()) errs.username = "Username is required";
  //   if (mode === "signup" && !email.trim()) errs.email = "Email is required";
  //   if (!password) errs.password = "Password is required";
  //   return errs;
  // }

  const handleAuth = async ({ email, password, plan: chosen, mode, username }) => {
    const user = await (mode === "signup"
      ? api.signup({ email, password, plan: chosen, username })
      : api.login({ username, password }));

    setPlan(user.has_basic_plan ? "basic" : "premium");
    setAuthed(true);
  }

  const playTrack = async (id) => {
    const track = library.find((track) => track.id === id);
    if(!track) {
      return;
    }

    const audioElement = audioRef.current;
    if (!track.streamUrl) {
      notify("This track has no audio!");
      return;
    }

    const isLoaded = current === id && audioElement.src && audioElement.src !== window.location.href;
    if (isLoaded) {
      await resume();
      await audioRef.current.play().catch(() => {});

      setPlaying(true);
      return;
    }

    audioRef.current.src = track.streamUrl;
    setCurrent(id);
    setElapsed(0);

    await resume();
    await audioElement.play().catch(() => {});

    setPlaying(true);
  };

  const deleteTrack = async (id) => {
    try {
      await api.deleteTrack(id);
    }
    catch (e) {
      notify("Failed to delete track!");
      return;
    }

    if (current === id) {
      audioRef.current.pause();
      audioRef.current.removeAttribute("src");

      setCurrent(null);
      setPlaying(false);
    }

    // Drop it from local state instead of re-fetching the whole library --
    // the delete already told us it succeeded, no need for a second round trip.
    setLibrary((prev) => prev.filter((t) => t.id !== id));
    setMenu(null);
  }

  const togglePlay = async () => {
    const audioElement = audioRef.current;
    if (!audioElement) {
      return;
    }

    if (playing) {
      audioElement.pause();
      setPlaying(false);
    } 
    else {
      await audioElement.play().catch(() => {});
      setPlaying(true);
    }
  };

  const createPlaylist = async (name) => {
    // TODO: await api.createPlaylist(name); setPlaylists(await api.listPlaylists());
    if (playlists.length >= limits.maxPlaylists) {
      notify(`Failed to create playlist! The basic plan is limited to ${limits.maxPlaylists} playlists!`);
      return;
    }
    
    setModal(null);
  };
  
  const uploadTrack = async ({ file, cover, title, artist }) => {
    const getFileDuration = async (file) => {
      return new Promise((resolve) => {
        const url = URL.createObjectURL(file);
        const audio = new Audio();
        audio.preload = "metadata";
        
        audio.onloadedmetadata = () => {
          URL.revokeObjectURL(url);
          resolve(Math.floor(audio.duration) || 0);
        };

        audio.onerror = () => {
          URL.revokeObjectURL(url);
          resolve(0);
        }
        audio.src = url;
      });
    };

    // These three are independent of each other -- run them concurrently
    // instead of waiting on each one before starting the next.
    const [durationSec, mp3Url, coverUrl] = await Promise.all([
      getFileDuration(file),
      api.uploadFile(file, "mp3"),
      cover ? api.uploadFile(cover, "image") : Promise.resolve(null),
    ]);

    const newTrack = await api.createTrack({
      title: title || file.name.replace(/\.[^/.]+$/, ""),
      artist: artist || "Unknown Artist",
      durationSec,
      mp3Url,
      coverUrl
    });

    // Append the track the create call already returned instead of
    // re-fetching the whole library -- one round trip instead of two.
    setLibrary((prev) => [...prev, newTrack]);
    return newTrack;
  };

  const addToPlaylist = async (trackId, playlistId) => {
    const playlist = playlists.find((playlist) => playlist.id === playlistId);
    if (playlist && playlist.tracks.length >= limits.maxSongsPerPlaylist) {
      notify(`Failed to add track! The basic only allows for ${limits.maxSongsPerPlaylist} songs per playlist!`);
      return;
    }
    
    // TODO: await api.addTrackToPlaylist(playlistId, trackId); setPlaylists(await api.listPlaylists());
  };
  
  const removeFromPlaylist = async (trackId, playlistId) => {
    // TODO: await api.removeTrackFromPlaylist(playlistId, trackId); setPlaylists(await api.listPlaylists());
  };

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
    if (!limits.effects.includes(key)) {
      notify("That effect is a premium feature!");
      return;
    }

    setFx((effect) => {
      const newState = !effect[key];
      setEffect(key, newState);

      return { ...effect, [key]: newState };
    })
  };

  const upgrade = () => {
    setPlan("premium");
    notify("Upgraded to premium!");
  }

  const downgrade = () => {
    setPlan("basic");
    notify("Downgraded to basic!");
  }

const value = {
    authed, plan, isPremium, loading,
    library, playlists,
    current, track, playing, elapsed, seek, duration,
    eq, fx, vol, setVol,
    modal, openModal: setModal, closeModal: () => setModal(null),
    menu, openMenu: (trackId, e) => { e.stopPropagation(); setMenu({ trackId, x: e.clientX, y: e.clientY }); }, closeMenu: () => setMenu(null),
    expanded, expand: () => setExpanded(true), collapse: () => setExpanded(false),
    audioRef, getAnalyser, toast, notify,
    handleAuth, playTrack, togglePlay, createPlaylist, uploadTrack, deleteTrack,
    addToPlaylist, removeFromPlaylist, upgrade, downgrade,
    setEqBand, resetEq, toggleFx,
};

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}
