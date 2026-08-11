"use client";

import { usePlayer } from "../lib/store";
import { C, frost } from "../lib/theme";
import { AmbientBackground } from "./Visualizers";
import { Sidebar } from "./Sidebar";
import { PlayerBar } from "./PlayerBar";
import { NowPlaying } from "./NowPlaying";
import { Overlays } from "./Modals";
import { AuthScreen } from "./AuthScreen";

/* The persistent frame. It never unmounts as you navigate — only {children}
   (the current route's page) swaps. That's why the player keeps playing across
   pages: the <audio> element and player state live here, above the router. */
export function AppShell({ children }) {
  const { authed, audioRef, getAnalyser, playing, track, expanded, toast } = usePlayer();

  return (
    <>
      {/* The only audio source. Its analyser drives the visualizer. */}
      <audio ref={audioRef} crossOrigin="anonymous" preload="none" />
      <AmbientBackground getAnalyser={getAnalyser} playing={playing} />

      {!authed ? (
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
