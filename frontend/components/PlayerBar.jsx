"use client";

import { useState } from "react";
import { Spectrum } from "./Visualizers";
import { usePlayer } from "../lib/store";
import { C, frost, fmtTime } from "../lib/theme";
import { PlayIcon, PauseIcon, Artwork } from "./ui";

/* Fixed to the bottom, rendered by the persistent shell — so it keeps showing
   the current track no matter which route you're on. */
export function PlayerBar() {
  const { track, playing, elapsed, togglePlay, expand, getAnalyser, seek, duration } = usePlayer();
  const [hover, setHover] = useState(null); // { x, time } in bar-local px / seconds

  if (!track) {
    return null;
  }

  const real_duration = duration || track.dur;

  const timeAtEvent = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    return { x: ratio * rect.width, time: ratio * real_duration };
  };

  const onScrub = (e) => {
    seek(timeAtEvent(e).time);
  }

  const onScrubHover = (e) => {
    setHover(timeAtEvent(e));
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 flex items-center gap-4 px-4 md:px-6" style={{ ...frost("rgba(16,16,20,0.72)"), borderTop: `1px solid ${C.line}`, zIndex: 20 }}>
      <div className="flex items-center gap-3 w-1/4 min-w-0">
        <Artwork track={track} className="w-10 h-10 rounded-md shrink-0" />
        <div className="min-w-0"><div className="text-[13px] font-semibold truncate">{track.title}</div><div className="text-[11px] truncate" style={{ color: C.sub }}>{track.artist}</div></div>
      </div>

      <div className="flex-1 flex flex-col items-center gap-1.5">
        <button onClick={togglePlay} className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2" style={{ background: "#fff" }}>{playing ? <PauseIcon s={18} /> : <PlayIcon s={18} />}</button>
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-[10px] font-mono" style={{ color: C.faint }}>{fmtTime(elapsed)}</span>
          <div onClick={onScrub} onMouseMove={onScrubHover} onMouseLeave={() => setHover(null)}
            className="relative flex-1 h-1 rounded-full overflow-visible cursor-pointer" style={{ background: C.line }}>
            {hover && (
              <div className="absolute -top-7 -translate-x-1/2 px-1.5 py-0.5 rounded-md text-[10px] font-mono pointer-events-none"
                style={{ left: hover.x, ...frost("rgba(26,26,31,0.96)"), border: `1px solid ${C.line}`, color: C.text }}>
                {fmtTime(hover.time)}
              </div>
            )}
            <div className="h-full rounded-full overflow-hidden" style={{ width: `${(elapsed / real_duration) * 100}%`, background: `linear-gradient(90deg, ${C.a1}, ${C.a2})` }} />
          </div>
          <span className="text-[10px] font-mono" style={{ color: C.faint }}>{fmtTime(real_duration)}</span>
        </div>
      </div>

      <div className="w-1/4 flex justify-end items-center gap-2">
        <div className="hidden lg:block w-20 h-8 rounded-md overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}><Spectrum getAnalyser={getAnalyser} playing={playing} big={false} /></div>
        <button onClick={expand} className="text-[12px] font-medium px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors" style={{ color: C.sub, border: `1px solid ${C.line}` }}>Open ↑</button>
      </div>
    </div>
  );
}