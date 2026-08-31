"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";

import * as api from "./api";
import { useAnalyser } from "./audio";
import { PLAN_LIMITS } from "./plans";
import { PREVIEW, SAMPLE_TRACKS, SAMPLE_PLAYLISTS } from "./sample";

const PlayerContext = createContext(null);
export const usePlayer = () => useContext(PlayerContext);

export function PlayerProvider({ children }) {
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
  const limits = PLAN_LIMITS[plan] ?? PLAN_LIMITS.basic;

  const track = library.find((t) => t.id === current) || null;

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const user = await api.getUser();   // sends cookie automatically via credentials: "include"
        if (alive) {
          setPlan(user.has_basic_plan ? "basic" : "premium");
          setAuthed(true);
        }
      } catch {
        // no valid cookie / expired token — stays on the login screen, which is correct
      }
    })();
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    let alive = true;
    
    (async () => {
      try {
        const tracks = await api.listTracks();

        if(alive) {
          setLibrary(tracks);
          // setPlaylists(lists);
        }
      }
      catch(e) {
        console.error("Failed to load library! Error: ", e);
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
    } 
    catch (err) {
      if (err.message?.includes("401")) {
        notify(mode === "signup" ? "Could not create account" : "Invalid username or password");
      } else if (err.message?.includes("409")) {
        notify("An account with that username already exists");
      } else {
        notify("Something went wrong — please try again");
      }

      console.error(`${mode} failed: `, err);
    }
  };

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

    const durationSec = await getFileDuration(file);
    const mp3Url = await api.uploadFile(file, "mp3");
    const coverUrl = cover ? await api.uploadFile(cover, "image") : null;

    const newTrack = await api.createTrack({
      title: title || file.name.replace(/\.[^/.]+$/, ""),
      artist: artist || "Unknown Artist",
      durationSec,
      mp3Url,
      coverUrl
    });

    setLibrary(await api.listTracks());
    return newTrack;
  };

  const addToPlaylist = async (trackId, playlistId) => {
    const playlist = playlists.find((playlist) => playlist.id === playlistId);
    if (playlist && playlists.tracks.length >= limits.maxSongsPerPlaylist) {
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
    library, playlists, queue,
    current, track, playing, elapsed, seek, duration,
    eq, fx, vol, setVol,
    modal, openModal: setModal, closeModal: () => setModal(null),
    menu, openMenu: (trackId, e) => { e.stopPropagation(); setMenu({ trackId, x: e.clientX, y: e.clientY }); }, closeMenu: () => setMenu(null),
    expanded, expand: () => setExpanded(true), collapse: () => setExpanded(false),
    audioRef, getAnalyser, toast, notify,
    handleAuth, playTrack, togglePlay, createPlaylist, uploadTrack,
    addToPlaylist, removeFromPlaylist, upgrade, downgrade,
    setEqBand, resetEq, toggleFx,
};

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}
