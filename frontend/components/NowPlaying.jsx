"use client";

import { usePlayer } from "../lib/store";
import { C, frost, fmtTime, hexA, EQ_BANDS } from "../lib/theme";
import { Spectrum, EQCurve } from "./Visualizers";
import { PlayIcon, PauseIcon, Toggle, VSlider } from "./ui";

export function NowPlaying() {
  const { track, playing, elapsed, togglePlay, collapse, getAnalyser,
    eq, setEqBand, resetEq, fx, toggleFx, vol, setVol, isPremium, } = usePlayer();
  
  if (!track) return null;

  return (
    <div className="fixed inset-0 flex flex-col" style={{ ...frost("rgba(8,8,10,0.72)"), zIndex: 40 }}>
      <div className="flex items-center justify-between px-5 md:px-8 h-16 shrink-0" style={{ borderBottom: `1px solid ${C.lineSoft}` }}>
        <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: C.faint }}>Now playing</span>
        <button onClick={collapse} className="text-sm px-3 py-1.5 rounded-lg hover:bg-white/5" style={{ color: C.sub, border: `1px solid ${C.line}` }}>Close ↓</button>
      </div>

      <div className="flex-1 overflow-y-auto radd-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
        <div className="flex flex-col">
          <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[280px]" style={{ background: `linear-gradient(135deg, ${hexA(track.g1, 0.15)}, ${hexA(track.g2, 0.15)})`, border: `1px solid ${C.line}` }}>
            <div className="absolute inset-0"><Spectrum getAnalyser={getAnalyser} playing={playing} big /></div>
            <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: "linear-gradient(180deg, transparent, rgba(8,8,10,0.85))" }}><div className="text-2xl font-bold tracking-tight">{track.title}</div><div className="text-sm" style={{ color: C.sub }}>{track.artist}</div></div>
          </div>
          <div className="flex items-center gap-4 mt-5">
            <button onClick={togglePlay} className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform" style={{ background: "#fff" }}>{playing ? <PauseIcon /> : <PlayIcon />}</button>
            <div className="flex-1 flex items-center gap-2"><span className="text-[11px] font-mono" style={{ color: C.faint }}>{fmtTime(elapsed)}</span><div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: C.line }}><div className="h-full" style={{ width: `${(elapsed / track.dur) * 100}%`, background: `linear-gradient(90deg, ${C.a1}, ${C.a2})` }} /></div><span className="text-[11px] font-mono" style={{ color: C.faint }}>{fmtTime(track.dur)}</span></div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-[11px]" style={{ color: C.faint }}>Volume</span>
            <input type="range" min={0} max={1} step={0.01} value={vol} onChange={(e) => setVol(parseFloat(e.target.value))} className="radd-hrange flex-1" aria-label="Volume" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl p-5" style={{ ...frost(C.panel), border: `1px solid ${C.line}` }}>
            <div className="flex items-center justify-between mb-3"><h3 className="text-sm font-semibold">Equalizer</h3><button onClick={resetEq} className="text-[11px] font-mono hover:underline" style={{ color: C.faint }}>reset</button></div>
            <EQCurve gains={eq} />
            <div className="flex gap-2 mt-4" style={{ height: 150 }}>{EQ_BANDS.map((b, i) => (<VSlider key={b.label} label={b.label} min={-12} max={12} step={0.5} value={eq[i]} readout={`${eq[i] > 0 ? "+" : ""}${eq[i]}`} onChange={(v) => setEqBand(i, v)} />))}</div>
          </div>
          <div className="rounded-2xl p-5" style={{ ...frost(C.panel), border: `1px solid ${C.line}` }}>
            <h3 className="text-sm font-semibold mb-3">Effects</h3>
            <div className="grid grid-cols-1 gap-2.5">
              <Toggle label="Reverb" on={fx.reverb} onClick={() => toggleFx("reverb")} />
              <Toggle label="Chorus" on={fx.chorus} onClick={() => toggleFx("chorus")} />
              <Toggle label={isPremium ? "Distortion" : "Distortion — Premium"} on={fx.distortion} onClick={() => isPremium && toggleFx("distortion")} locked={!isPremium} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}