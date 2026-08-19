/* PREVIEW toggle + sample data.

   Kept in one file because BOTH the server (lib/api.js, during SSR) and the
   client (lib/store.jsx) need them. Default is the real dead shell: no data,
   nothing wired. Flip PREVIEW to true only to eyeball the UI — it injects the
   fake rows below and skips the login screen. Ship with it false. */

export const PREVIEW = true;

export const SAMPLE_TRACKS = [
  { id: "s1", title: "Neon Drift", artist: "Aurora Sync", dur: 214, g1: "#67e8f9", g2: "#3b82f6", streamUrl: null },
  { id: "s2", title: "Glass Rain", artist: "Low Ceiling", dur: 268, g1: "#38bdf8", g2: "#c084fc", streamUrl: null },
  { id: "s3", title: "Voltage", artist: "Mainline", dur: 198, g1: "#22d3ee", g2: "#a855f7", streamUrl: null },
  { id: "s4", title: "Undertow", artist: "Deepfield", dur: 242, g1: "#2dd4bf", g2: "#6366f1", streamUrl: null },
  { id: "s5", title: "Halcyon", artist: "Softwave", dur: 226, g1: "#818cf8", g2: "#e879f9", streamUrl: null },
  { id: "s6", title: "Afterglow", artist: "Aurora Sync", dur: 205, g1: "#67e8f9", g2: "#c084fc", streamUrl: null },
];
export const SAMPLE_PLAYLISTS = [
  { id: "sp1", name: "Late Night", tracks: ["s1", "s3"] },
  { id: "sp2", name: "Focus", tracks: ["s2", "s5"] },
];