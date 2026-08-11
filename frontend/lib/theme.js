// Design tokens + tiny helpers shared across components.
// The color values here mirror the CSS variables in app/globals.css.

export const C = {
  bg: "#08080a", bg2: "#0d0d10",
  panel: "rgba(19,19,23,0.62)", panelSolid: "#131317", panel2: "rgba(26,26,31,0.66)",
  line: "#26262d", lineSoft: "#1c1c22",
  text: "#f5f5f7", sub: "#9a9aa5", faint: "#63636e",
  a1: "#67e8f9", a2: "#c084fc",
};

export const BRAND = ["#67e8f9", "#c084fc"];

export const EQ_BANDS = [
  { label: "Bass", hz: 80 }, { label: "Low mid", hz: 250 }, { label: "Mid", hz: 1000 },
  { label: "High mid", hz: 3500 }, { label: "Treble", hz: 10000 },
];

export const frost = (bg) => ({ background: bg, backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" });

export const fmtTime = (s) => { if (!isFinite(s)) s = 0; return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`; };

export function hexToRgb(h) { const n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
export function hexA(h, a) { const [r, g, b] = hexToRgb(h); return `rgba(${r},${g},${b},${a})`; }
export function lerpColor(a, b, t) {
  const [ar, ag, ab] = hexToRgb(a), [br, bg, bb] = hexToRgb(b);
  return "#" + [Math.round(ar + (br - ar) * t), Math.round(ag + (bg - ag) * t), Math.round(ab + (bb - ab) * t)]
    .map((v) => v.toString(16).padStart(2, "0")).join("");
}
