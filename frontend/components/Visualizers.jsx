"use client";

import { useRef, useEffect, memo } from "react";
import { C, BRAND, EQ_BANDS, hexA, lerpColor } from "../lib/theme";

export const AmbientBackground = memo(function AmbientBackground({ getAnalyser, playing }) {
  const cvs = useRef(null); const raf = useRef(0); const st = useRef(null);
  useEffect(() => {
    const canvas = cvs.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    const blobs = [
      { x: 0.16, y: 0.22, color: "#22d3ee", band: [0.00, 0.06], seed: Math.random() * 99 },
      { x: 0.84, y: 0.28, color: "#3b82f6", band: [0.06, 0.16], seed: Math.random() * 99 },
      { x: 0.82, y: 0.80, color: "#d946ef", band: [0.16, 0.40], seed: Math.random() * 99 },
      { x: 0.18, y: 0.78, color: "#a855f7", band: [0.40, 0.75], seed: Math.random() * 99 },
    ];

    if (!st.current) {
      st.current = { 
        t: 0, 
        sm: [0, 0, 0, 0], 
        flick: [0, 0, 0, 0], 
        wx: [0, 0, 0, 0], 
        wy: [0, 0, 0, 0], 
        tx: [0, 0, 0, 0], 
        ty: [0, 0, 0, 0] 
      };
    }

    const s = st.current;
    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth, h = window.innerHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) { canvas.width = w * dpr; canvas.height = h * dpr; }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = C.bg; ctx.fillRect(0, 0, w, h);
      const an = getAnalyser(); const energies = [0, 0, 0, 0];
      if (an && playing) {
        const buf = new Uint8Array(an.frequencyBinCount); an.getByteFrequencyData(buf); const N = an.frequencyBinCount;
        blobs.forEach((b, i) => { const lo = Math.floor(b.band[0] * N), hi = Math.max(lo + 1, Math.floor(b.band[1] * N)); let sum = 0; for (let k = lo; k < hi; k++) sum += buf[k]; energies[i] = (sum / (hi - lo)) / 255; });
      }
      s.t += reduce ? 0 : 0.006; const t = s.t, base = Math.min(w, h);
      ctx.globalCompositeOperation = "lighter";
      
      blobs.forEach((b, i) => {
        const boosted = Math.pow(energies[i], 0.65) * 1.25;
        s.sm[i] += (boosted - s.sm[i]) * 0.3;

        const e = s.sm[i];
        s.flick[i] = Math.max(-1, Math.min(1, (s.flick[i] + (Math.random() - 0.5) * 0.25) * 0.93));
        const flick = s.flick[i];
        
        if (Math.random() < 0.012) { s.tx[i] = (Math.random() - 0.5) * 0.13; s.ty[i] = (Math.random() - 0.5) * 0.13; }
        s.wx[i] += (s.tx[i] - s.wx[i]) * 0.02; s.wy[i] += (s.ty[i] - s.wy[i]) * 0.02;
        
        const drift = reduce ? 0 : 0.038;
        const cx = (b.x + Math.sin(t * 0.7 + b.seed) * drift + s.wx[i]) * w;
        const cy = (b.y + Math.cos(t * 0.6 + b.seed * 1.3) * drift + s.wy[i]) * h;
        const breathe = playing ? 0.11 * Math.sin(t * 2.3 + b.seed) : 0.05 * Math.sin(t + b.seed);
        const R = base * (0.17 + e * 0.32 + breathe * 0.05 + flick * 0.03);
        const idleA = playing ? 0.10 : 0.045;
        const A = Math.max(0, Math.min(0.6, idleA + e * 0.55 + flick * 0.05));
        const rr = Math.max(1, R);
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rr);
        
        grad.addColorStop(0, hexA(b.color, A)); grad.addColorStop(0.5, hexA(b.color, A * 0.45)); grad.addColorStop(1, hexA(b.color, 0));
        ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(cx, cy, rr, 0, Math.PI * 2); ctx.fill();
      });
      
      ctx.globalCompositeOperation = "source-over";
      raf.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf.current);
  }, [getAnalyser, playing]);
  
  return <canvas ref={cvs} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
});

export const Spectrum = memo(function Spectrum({ getAnalyser, playing, big, colors = BRAND }) {
  const cvs = useRef(null); 
  const raf = useRef(0);
  
  useEffect(() => {
    const canvas = cvs.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    let phase = 0; 
    const [g1, g2] = colors;
    
    const draw = () => {
      const dpr = window.devicePixelRatio || 1; const w = canvas.clientWidth, h = canvas.clientHeight;
      if (w <= 0 || h <= 0) { raf.current = requestAnimationFrame(draw); return; }
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) { canvas.width = w * dpr; canvas.height = h * dpr; }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h);
      const an = getAnalyser(); const N = big ? 72 : 34; let mags = new Array(N).fill(0); let signal = false;
      
      if (an && playing) {
        const buf = new Uint8Array(an.frequencyBinCount); an.getByteFrequencyData(buf);
        let tot = 0; for (let i = 0; i < buf.length; i++) tot += buf[i];
        if (tot > 400) { signal = true; const usable = Math.floor(an.frequencyBinCount * 0.62); for (let i = 0; i < N; i++) { const idx = Math.floor(Math.pow(i / N, 1.35) * usable); mags[i] = buf[idx] / 255; } }
      }

      if (!signal) { phase += reduce ? 0 : 0.03; for (let i = 0; i < N; i++) mags[i] = 0.05 + 0.04 * (Math.sin(phase + i * 0.5) * 0.5 + 0.5); }
      
      const gap = big ? 4 : 2.5; const bw = Math.max(0, (w - gap * (N - 1)) / N); const mid = h / 2;
      for (let i = 0; i < N; i++) {
        const m = mags[i]; const bh = Math.max(2, m * h * (big ? 0.92 : 0.8)); const x = i * (bw + gap);
        const col = lerpColor(g1, g2, i / (N - 1));
        const grad = ctx.createLinearGradient(0, mid - bh / 2, 0, mid + bh / 2); grad.addColorStop(0, col); grad.addColorStop(1, col + "44");
        
        ctx.fillStyle = grad; ctx.shadowColor = col; ctx.shadowBlur = big ? 10 : 4;
        ctx.globalAlpha = (0.5 + m * 0.4) * (0.92 + Math.random() * 0.08);
      
        roundRect(ctx, x, mid - bh / 2, bw, bh, Math.min(bw / 2, 3)); ctx.fill();
      }

      ctx.globalAlpha = 1; ctx.shadowBlur = 0;
      raf.current = requestAnimationFrame(draw);
    };
    
    draw();
    return () => cancelAnimationFrame(raf.current);
  }, [getAnalyser, playing, big, colors]);
  
  return <canvas ref={cvs} className="w-full h-full block" />;
});

function roundRect(ctx, x, y, w, h, r) { 
  r = Math.max(0, Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2)); 
  
  ctx.beginPath(); 
  ctx.moveTo(x + r, y); 
  ctx.arcTo(x + w, y, x + w, y + h, r); 
  ctx.arcTo(x + w, y + h, x, y + h, r); 
  ctx.arcTo(x, y + h, x, y, r); 
  ctx.arcTo(x, y, x + w, y, r); 
  
  ctx.closePath(); 
}

export const EQCurve = memo(function EQCurve({ gains, colors = BRAND }) {
  const W = 260, H = 64, pad = 6; 
  const [g1, g2] = colors;
  const pts = []; const n = 60;
  
  for (let i = 0; i <= n; i++) { 
    const t = i / n; 
    let v = 0; 

    EQ_BANDS.forEach((b, bi) => { 
      const bx = Math.log10(b.hz / 40) / Math.log10(16000 / 40); 
      v += gains[bi] * Math.exp(-Math.pow((t - bx) / 0.16, 2)); }); 
      
      const y = H / 2 - (v / 12) * (H / 2 - pad); 
      
      pts.push([pad + t * (W - pad * 2), Math.max(pad, Math.min(H - pad, y))]); 
    }
  
  const d = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  
  return (<svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 64 }}><defs><linearGradient id="eqg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor={g1} /><stop offset="1" stopColor={g2} /></linearGradient></defs><line x1={pad} y1={H / 2} x2={W - pad} y2={H / 2} stroke={C.line} strokeDasharray="2 3" /><path d={d} fill="none" stroke="url(#eqg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>);
});
