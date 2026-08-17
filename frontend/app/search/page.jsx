"use client";

// Search. For the shell it filters the already-loaded library on the client.
// When you wire the backend, swap the local filter for api.searchTracks(q) so
// the server does the searching (better for large catalogs).

import { useState } from "react";
import { usePlayer } from "../../lib/store";
import { C } from "../../lib/theme";
import { TopBar, PageBody, PlanChip, SearchIcon } from "../../components/ui";
import { TrackList } from "../../components/TrackList";

export default function SearchPage() {
  const { library, loading, isPremium } = usePlayer();
  const [q, setQ] = useState("");
  const results = q ? library.filter((t) => (t.title + t.artist).toLowerCase().includes(q.toLowerCase())) : library;

  return (
    <>
      <TopBar>
        <div className="flex items-center gap-2 rounded-lg px-3 py-2 max-w-md flex-1" style={{ background: C.bg2, border: `1px solid ${C.line}` }}>
          <SearchIcon c={C.faint} />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search songs, artists…" className="bg-transparent outline-none text-sm flex-1" style={{ color: C.text }} />
        </div>
        <PlanChip premium={isPremium} />
      </TopBar>
      <PageBody>
        <TrackList tracks={results} loading={loading} emptyMsg={q ? "No matches." : "Search your catalog."} />
      </PageBody>
    </>
  );
}