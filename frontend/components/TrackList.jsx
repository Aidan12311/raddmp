"use client";

import { usePlayer } from "../lib/store";
import { C, fmtTime } from "../lib/theme";
import { MoreIcon, Empty } from "./ui";

/* A list of tracks. Pass the array to show; behavior (play, menu) comes from
   the shared store so any list on any page behaves identically. */
export function TrackList({ tracks, loading = false, emptyMsg = "No songs here yet." }) {
  const { current, playing, playTrack, togglePlay, openMenu } = usePlayer();
  if (loading) return <Empty msg="Loading…" />;
  if (!tracks.length) return <Empty msg={emptyMsg} />;
  return (
    <div className="flex flex-col">
      {tracks.map((t, i) => (
        <Row key={t.id} t={t} idx={i + 1}
          active={current === t.id}
          playing={playing && current === t.id}
          onClick={() => (current === t.id ? togglePlay() : playTrack(t.id))}
          onMenu={openMenu} />
      ))}
    </div>
  );
}

function Row({ t, idx, active, playing, onClick, onMenu }) {
  return (
    <div className="group grid items-center gap-4 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors" style={{ gridTemplateColumns: "24px 1fr auto auto" }}>
      <button onClick={onClick} className="contents text-left"><span className="text-[13px] font-mono text-center" style={{ color: active ? C.a1 : C.faint }}>{playing ? "♪" : idx}</span></button>
      <button onClick={onClick} className="flex items-center gap-3 min-w-0 text-left">
        <div className="w-10 h-10 rounded-md shrink-0" style={{ background: `linear-gradient(135deg, ${t.g1}, ${t.g2})` }} />
        <div className="min-w-0"><div className="text-[14px] font-medium truncate">{t.title}</div><div className="text-[12px] truncate" style={{ color: C.sub }}>{t.artist}</div></div>
      </button>
      <button onClick={(e) => onMenu(t.id, e)} className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 rounded-md flex items-center justify-center hover:bg-white/10" aria-label="Track menu"><MoreIcon c={C.sub} /></button>
      <span className="text-[12px] font-mono" style={{ color: C.faint }}>{fmtTime(t.dur)}</span>
    </div>
  );
}