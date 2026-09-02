"use client";

import { usePlayer } from "../lib/store";
import { C, frost } from "../lib/theme";
import { AmbientBackground } from "./Visualizers";
import { Sidebar } from "./Sidebar";
import { PlayerBar } from "./PlayerBar";
import { NowPlaying } from "./NowPlaying";
import { Overlays } from "./Modals";
import { AuthScreen } from "./AuthScreen";

export function AppShell({ children }) {
  const { authed, username, loading, audioRef, getAnalyser, playing, track, expanded, toast } = usePlayer();

  return (
    <>
      <audio ref={audioRef} crossOrigin="anonymous" preload="none" />
      <AmbientBackground getAnalyser={getAnalyser} playing={playing} />

      {loading ? (
        <div className="min-h-screen flex items-center justify-center" style={{ color: C.sub }}>
          <div className="flex flex-col items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 animate-spin"
              style={{ borderColor: C.line, borderTopColor: C.a1 }} />
            <span className="text-sm">Loading…</span>
          </div>
        </div>
      ) : !authed ? (
        <AuthScreen />
      ) : (
        <div className="relative flex h-screen w-full overflow-hidden font-sans" style={{ color: C.text, zIndex: 10 }}>
          <Sidebar />
          <main className="flex-1 flex flex-col min-w-0">{children}</main>
          <PlayerBar />
          {expanded && track && <NowPlaying />}
          <Overlays />
          {toast && (
            <div className="fixed left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-xl text-[13px] font-medium shadow-lg"
              style={{ bottom: track ? 96 : 24, zIndex: 70, ...frost("rgba(26,26,31,0.9)"), border: `1px solid ${C.line}`, color: C.text }}>
              {toast}
            </div>
          )}
        </div>
      )}
    </>
  );
}
