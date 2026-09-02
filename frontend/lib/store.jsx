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

  // Fetch every playlist, then fetch each one's songs. Playlist rows come back
  // without their tracks -- that's the two-Lambda split on the backend.
  const loadPlaylists = async () => {
    const lists = await api.listPlaylists();

    return Promise.all(
      lists.map(async (playlist) => {
        try {
          const tracks = await api.listPlaylistTracks(playlist.id);
          return { ...playlist, tracks: tracks.map((t) => t.id) };
        }
        catch (e) {
          console.error(`Failed to load tracks for playlist ${playlist.id}! Error: `, e);
          return playlist;
        }
      })
    );
  };

  // Session check + initial library load, combined so `loading` only clears
  // once BOTH are settled -- otherwise whichever resolves first flips the
  // screen before we actually know if the user is authed.
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

  // Playlist routes sit behind RaddAuthorizer, so this waits for a valid
  // session instead of firing on mount and 401ing.
  useEffect(() => {
    if (!authed) {
      setPlaylists([]);
      return;
    }

    let alive = true;

    (async () => {
      try {
        const lists = await loadPlaylists();

        if (alive) {
          setPlaylists(lists);
        }
      }
      catch (e) {
        console.error("Failed to load playlists! Error: ", e);
      }
    })();

    return () => { alive = false; };
  }, [authed]);

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
    return () => window.removeEventListener("click", c);
  }, []);

  const seek = (seconds) => {
    const audioElement = audioRef.current;
    if (!audioElement) {
      return;
    }

    audioElement.currentTime = seconds;
    setElapsed(seconds);
  };

  const handleAuth = async ({ email, password, plan: chosen, mode, username: uname }) => {
    await (mode === "signup"
      ? api.signup({ email, password, plan: chosen, username: uname })
      : api.login({ username: uname, password }));

    const user = await api.getUser();
    setUsername(user.username);
    setPlan(user.has_basic_plan ? "basic" : "premium");
    setAuthed(true);
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

    // The song is gone from every playlist server-side too, so mirror that here.
    setPlaylists((prev) =>
      prev.map((playlist) => ({
        ...playlist,
        tracks: playlist.tracks.filter((trackId) => trackId !== id),
      }))
    );

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
    if (playlists.length >= limits.maxPlaylists) {
      notify(`Failed to create playlist! The basic plan is limited to ${limits.maxPlaylists} playlists!`);
      return;
    }

    try {
      const playlist = await api.createPlaylist(name);

      // The create call already returned the new playlist, and a brand new one
      // has no songs -- no reason to re-fetch the whole list.
      setPlaylists((prev) => [...prev, playlist]);
      setModal(null);
    }
    catch (e) {
      // The Lambda enforces the same cap, so this fires if local state drifted.
      notify(e.message?.includes("403")
        ? `Failed to create playlist! The basic plan is limited to ${limits.maxPlaylists} playlists!`
        : "Failed to create playlist!");

      console.error("Failed to create playlist! Error: ", e);
    }
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

    if (playlist && playlist.tracks.includes(trackId)) {
      notify("That song is already in this playlist!");
      return;
    }

    try {
      await api.addTrackToPlaylist(playlistId, trackId);

      // Server appends to the end, so appending locally keeps the same order.
      setPlaylists((prev) =>
        prev.map((p) =>
          p.id === playlistId ? { ...p, tracks: [...p.tracks, trackId] } : p
        )
      );

      setModal(null);
    }
    catch (e) {
      notify("Failed to add track to playlist!");
      console.error("Failed to add track to playlist! Error: ", e);
    }
  };

  const removeFromPlaylist = async (trackId, playlistId) => {
    try {
      await api.removeTrackFromPlaylist(playlistId, trackId);

      setPlaylists((prev) =>
        prev.map((p) =>
          p.id === playlistId
            ? { ...p, tracks: p.tracks.filter((id) => id !== trackId) }
            : p
        )
      );

      setMenu(null);
    }
    catch (e) {
      notify("Failed to remove track from playlist!");
      console.error("Failed to remove track from playlist! Error: ", e);
    }
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

  const upgrade = async () => {
    try {
      await api.updatePlan("premium");
      setPlan("premium");
      notify("Upgraded to premium!");
    } catch (err) {
      notify("Failed to upgrade — please try again");
      console.error("Upgrade failed:", err);
    }
  };

  const downgrade = async () => {
    try {
      await api.updatePlan("basic");
      setPlan("basic");
      notify("Downgraded to basic!");
    } catch (err) {
      notify("Failed to downgrade — please try again");
      console.error("Downgrade failed:", err);
    }
  };

  const value = {
    authed, plan, isPremium, loading,
    username,
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