"use client";

import { C, frost } from "../lib/theme";

/* Small presentational building blocks used across the app. No state of their
   own — they take props and render. */

export function TopBar({ children }) {
  return (
    <header className="flex items-center gap-3 px-5 md:px-8 h-16 shrink-0"
      style={{ ...frost("rgba(8,8,10,0.35)"), borderBottom: `1px solid ${C.lineSoft}` }}>
      {children}
    </header>
  );
}

/* Scrollable content area for a page. Bottom padding clears the player bar. */
export function PageBody({ children }) {
  return (
    <section className="flex-1 overflow-y-auto radd-scroll px-5 md:px-8 py-6" style={{ paddingBottom: 112 }}>
      {children}
    </section>
  );
}

export function PlanChip({ premium }) {
  return (
    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md"
      style={{ color: C.sub, background: C.bg2, border: `1px solid ${C.line}` }}>
      {premium ? "PREMIUM" : "FREE"}
    </span>
  );
}

export function Modal({ title, onClose, children, footer, wide }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center px-4" style={{ zIndex: 60, background: "rgba(0,0,0,0.55)" }} onClick={onClose}>
      <div className={`w-full ${wide ? "max-w-lg" : "max-w-md"} rounded-2xl overflow-hidden`}
        style={{ ...frost("rgba(19,19,23,0.94)"), border: `1px solid ${C.line}` }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5" style={{ height: 54, borderBottom: `1px solid ${C.lineSoft}` }}>
          <h2 className="text-sm font-semibold">{title}</h2>
          <button onClick={onClose} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/5" style={{ color: C.sub }} aria-label="Close">✕</button>
        </div>
        <div className="p-5">{children}</div>
        {footer && <div className="flex justify-end gap-2 px-5 py-4" style={{ borderTop: `1px solid ${C.lineSoft}` }}>{footer}</div>}
      </div>
    </div>
  );
}

export const Field = (p) => (
  <input {...p} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2"
    style={{ background: C.bg2, border: `1px solid ${C.line}`, color: C.text }} />
);
export const BtnPrimary = ({ children, ...p }) => (
  <button {...p} className="rounded-lg px-4 py-2 text-sm font-semibold hover:scale-[1.02] transition-transform focus-visible:outline-none focus-visible:ring-2"
    style={{ background: `linear-gradient(90deg, ${C.a1}, ${C.a2})`, color: "#0a0a0a" }}>{children}</button>
);
export const BtnGhost = ({ children, ...p }) => (
  <button {...p} className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2"
    style={{ color: C.sub, border: `1px solid ${C.line}` }}>{children}</button>
);
export const GradientBtn = ({ children, ...p }) => (
  <button {...p} className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-semibold"
    style={{ background: `linear-gradient(90deg, ${C.a1}, ${C.a2})`, color: "#0a0a0a" }}>{children}</button>
);

export function VSlider({ value, min, max, step, onChange, label, readout }) {
  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <div className="text-[10px] font-mono tracking-wider" style={{ color: C.faint }}>{readout}</div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(parseFloat(e.target.value))}
        className="radd-vrange" style={{ writingMode: "vertical-lr" }} aria-label={label} />
      <div className="text-[11px] font-medium" style={{ color: C.sub }}>{label}</div>
    </div>
  );
}

export function Toggle({ on, onClick, label, locked }) {
  return (
    <button onClick={onClick} className="flex items-center justify-between rounded-xl px-3.5 py-3 transition-all w-full text-left focus-visible:outline-none focus-visible:ring-2"
      style={{ ...frost(on ? C.panel2 : C.panel), border: `1px solid ${on ? C.a1 : C.line}`, opacity: locked ? 0.5 : 1 }}>
      <span className="text-[13px] font-medium" style={{ color: on ? C.text : C.sub }}>{label}</span>
      {locked ? <LockIcon /> : (
        <span className="relative inline-block rounded-full transition-all" style={{ width: 34, height: 20, background: on ? C.a1 : C.line }}>
          <span className="absolute rounded-full transition-all" style={{ width: 14, height: 14, top: 3, left: on ? 17 : 3, background: on ? "#0a0a0a" : C.sub }} />
        </span>
      )}
    </button>
  );
}

export function Empty({ msg }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: C.bg2, border: `1px solid ${C.line}` }}><SearchIcon c={C.faint} /></div>
      <p className="text-sm" style={{ color: C.sub }}>{msg}</p>
    </div>
  );
}

export const MenuItem = ({ label, onClick, small }) => (
  <button onClick={onClick} className={`w-full text-left px-3 ${small ? "py-1.5 text-[12px]" : "py-2 text-[13px]"} hover:bg-white/5 transition-colors`} style={{ color: C.text }}>{label}</button>
);

/* icons */
export const LockIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.faint} strokeWidth="2"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>);
export const PlayIcon = ({ s = 22 }) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="#0a0a0a"><path d="M8 5v14l11-7z" /></svg>);
export const PauseIcon = ({ s = 22 }) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="#0a0a0a"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>);
export const MoreIcon = ({ c = "#fff" }) => (<svg width="16" height="16" viewBox="0 0 24 24" fill={c}><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>);
export const PlusIcon = ({ c = "#0a0a0a" }) => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>);
export const HomeIcon = ({ c = "#fff" }) => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5 12 3l9 6.5V21H3z" /><path d="M9 21v-7h6v7" /></svg>);
export const SearchIcon = ({ c = "#fff" }) => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" /></svg>);
export const Logo = () => (<span className="inline-flex items-center justify-center rounded-lg" style={{ width: 30, height: 30, background: `linear-gradient(135deg, ${C.a1}, ${C.a2})` }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.4" strokeLinecap="round"><path d="M4 14v-4M9 18V6M14 16V8M19 13v-2" /></svg></span>);