"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { C, frost } from "../lib/theme";
import { usePlayer } from "../lib/store";
import { Logo, HomeIcon, SearchIcon, PlanToggle } from "./ui";

<div className="px-3 py-2"><PlanToggle /></div>

export function Sidebar() {
  const { playlists, plan, openModal } = usePlayer();
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-60 shrink-0 px-3 py-4" style={{ ...frost(C.bg2 + "cc"), borderRight: `1px solid ${C.lineSoft}` }}>
      <div className="flex items-center gap-2.5 px-2 mb-6"><Logo /><span className="font-semibold tracking-tight">RADDMP</span></div>

      <nav className="flex flex-col gap-0.5">
        <NavLink href="/" label="Library" Icon={HomeIcon} active={pathname === "/"} />
        <NavLink href="/search" label="Search" Icon={SearchIcon} active={pathname === "/search"} />
      </nav>

      <div className="flex items-center justify-between px-2 mt-6 mb-2">
        <span className="text-[11px] font-semibold tracking-wide uppercase" style={{ color: C.faint }}>Playlists</span>
        <button onClick={() => openModal({ type: "createPlaylist" })} className="rounded-md w-5 h-5 flex items-center justify-center hover:bg-white/5" style={{ color: C.sub }} aria-label="New playlist">+</button>
      </div>

      <div className="flex flex-col gap-0.5 overflow-y-auto radd-scroll flex-1">
        {playlists.map((p) => {
          const active = pathname === `/playlist/${p.id}`;
          return (
            <Link key={p.id} href={`/playlist/${p.id}`} className="text-left px-3 py-2 rounded-lg text-[13px] truncate hover:bg-white/5 transition-colors"
              style={{ color: active ? C.text : C.sub, background: active ? "rgba(255,255,255,0.05)" : "transparent" }}>
              {p.name}<span className="ml-1.5 text-[11px] font-mono" style={{ color: C.faint }}>{p.tracks.length}</span>
            </Link>
          );
        })}
      </div>

      <PlanBadge />
    </aside>
  );
}

function NavLink({ href, label, Icon, active }) {
  return (
    <Link href={href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2"
      style={{ background: active ? "rgba(255,255,255,0.06)" : "transparent", color: active ? C.text : C.sub }}>
      <Icon c={active ? C.text : C.sub} /> {label}
    </Link>
  );
}

function PlanBadge() {
  const { plan, upgrade } = usePlayer();
  if (plan === "premium") return (<div className="rounded-xl p-3 mt-2" style={{ ...frost(C.panel), border: `1px solid ${C.line}` }}><div className="text-[12px] font-semibold">Premium</div><div className="text-[10px] mt-0.5" style={{ color: C.faint }}>Unlimited everything</div></div>);
  
  return (
    <div className="rounded-xl p-3 mt-2" style={{ ...frost(C.panel), border: `1px solid ${C.line}` }}>
      <div className="text-[12px] font-semibold mb-1">Free plan</div>
      <div className="text-[10px] mb-2.5" style={{ color: C.faint }}>3 playlists · 5 songs · limited effects</div>
      <button onClick={upgrade} className="w-full rounded-lg py-1.5 text-[12px] font-semibold hover:scale-[1.01] transition-transform" style={{ background: `linear-gradient(90deg, ${C.a1}, ${C.a2})`, color: "#0a0a0a" }}>Upgrade</button>
    </div>
  );
}