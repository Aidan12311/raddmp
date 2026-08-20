"use client";

import { usePlayer } from "../lib/store";
import { C, frost, fmtTime } from "../lib/theme";
import { Spectrum } from "./Visualizers";
import { PlayIcon, PauseIcon,  } from "./ui";

/* Fixed to the bottom, rendered by the persistent shell — so it keeps showing
   the current track no matter which route you're on. */
export function PlayerBar() {
  const { track, playing, elapsed, togglePlay, queue, openModal, expand, getAnalyser, seek } = usePlayer();
  if (!track) {
    return null;
  }

  const onScrub = (e) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * track.dur;
    
    seek(newTime);
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 flex items-center gap-4 px-4 md:px-6" style={{ ...frost("rgba(16,16,20,0.72)"), borderTop: `1px solid ${C.line}`, zIndex: 20 }}>
      <div className="flex items-center gap-3 w-1/4 min-w-0">
        <div className="w-12 h-12 rounded-lg shrink-0" style={{ background: `linear-gradient(135deg, ${track.g1}, ${track.g2})` }} />
        <div className="min-w-0"><div className="text-[13px] font-semibold truncate">{track.title}</div><div className="text-[11px] truncate" style={{ color: C.sub }}>{track.artist}</div></div>
      </div>

      <div className="flex-1 flex flex-col items-center gap-1.5">
        <button onClick={togglePlay} className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2" style={{ background: "#fff" }}>{playing ? <PauseIcon s={18} /> : <PlayIcon s={18} />}</button>
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-[10px] font-mono" style={{ color: C.faint }}>{fmtTime(elapsed)}</span>
          <div onClick={onScrub} className="flex-1 h-1 rounded-full overflow-hidden cursor-pointer" style={{ background: C.line }}>
            <div className="h-full rounded-full" style={{ width: `${(elapsed / track.dur) * 100}%`, background: `linear-gradient(90deg, ${C.a1}, ${C.a2})` }} />
          </div>
          <span className="text-[10px] font-mono" style={{ color: C.faint }}>{fmtTime(track.dur)}</span>
        </div>
      </div>

      <div className="w-1/4 flex justify-end items-center gap-2">
        {/* <button onClick={() => openModal({ type: "queue" })} className="flex items-center gap-1.5 text-[12px] font-medium px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors" style={{ color: C.sub, border: `1px solid ${C.line}` }}><QueueIcon c={C.sub} /> {queue.length > 0 && <span className="font-mono">{queue.length}</span>}</button> */}
        <div className="hidden lg:block w-20 h-8 rounded-md overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}><Spectrum getAnalyser={getAnalyser} playing={playing} big={false} /></div>
        <button onClick={expand} className="text-[12px] font-medium px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors" style={{ color: C.sub, border: `1px solid ${C.line}` }}>Open ↑</button>
      </div>
    </div>
  );
}