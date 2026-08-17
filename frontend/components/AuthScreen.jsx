"use client";

import { useState } from "react";
import { usePlayer } from "../lib/store";
import { C, frost } from "../lib/theme";
import { Logo, Field } from "./ui";

/* The login / signup screen. Submitting calls handleAuth in the store, which is
   an inert stub — so nothing happens until you wire it. On success your wired
   handleAuth calls setAuthed(true), which reveals the app. */
export function AuthScreen() {
  const { handleAuth } = usePlayer();
  const [mode, setMode] = useState("login");
  const [plan, setPlan] = useState("basic");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => handleAuth({ email, password, plan, mode });

  return (
    <div className="relative min-h-screen flex items-center justify-center px-5" style={{ zIndex: 10 }}>
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2.5 mb-8 justify-center"><Logo /><span className="text-xl font-semibold tracking-tight">RADDMP</span></div>
        <div className="rounded-2xl p-6" style={{ ...frost(C.panel), border: `1px solid ${C.line}` }}>
          <h1 className="text-lg font-semibold mb-1">{mode === "login" ? "Welcome back" : "Create your account"}</h1>
          <p className="text-[13px] mb-5" style={{ color: C.sub }}>{mode === "login" ? "Sign in to keep listening." : "Free plan — upgrade any time."}</p>

          <label className="block text-[11px] font-medium mb-1.5" style={{ color: C.sub }}>Email</label>
          <div className="mb-3"><Field type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></div>
          <label className="block text-[11px] font-medium mb-1.5" style={{ color: C.sub }}>Password</label>
          <div className="mb-4"><Field type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" /></div>

          {mode === "signup" && (
            <div className="mb-4">
              <label className="block text-[11px] font-medium mb-2" style={{ color: C.sub }}>Choose a plan</label>
              <div className="grid grid-cols-2 gap-2">
                {[{ k: "basic", t: "Free", d: "3 playlists · 5 songs" }, { k: "premium", t: "Premium", d: "Unlimited · all effects" }].map((p) => (
                  <button key={p.k} onClick={() => setPlan(p.k)} className="rounded-xl p-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2"
                    style={{ background: plan === p.k ? C.bg2 : "transparent", border: `1px solid ${plan === p.k ? C.a2 : C.line}` }}>
                    <div className="text-[13px] font-semibold">{p.t}</div><div className="text-[10px] mt-0.5" style={{ color: C.faint }}>{p.d}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <button onClick={submit} className="w-full rounded-lg py-2.5 text-sm font-semibold transition-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2"
            style={{ background: `linear-gradient(90deg, ${C.a1}, ${C.a2})`, color: "#0a0a0a" }}>{mode === "login" ? "Sign in" : "Create account"}</button>

          <div className="text-center text-[12px] mt-4" style={{ color: C.sub }}>
            {mode === "login" ? "New here? " : "Already have an account? "}
            <button className="font-semibold" style={{ color: C.a1 }} onClick={() => setMode(mode === "login" ? "signup" : "login")}>{mode === "login" ? "Create one" : "Sign in"}</button>
          </div>
        </div>
        <p className="text-center text-[11px] mt-5" style={{ color: C.faint }}>Shell — auth is not connected yet.</p>
      </div>
    </div>
  );
}