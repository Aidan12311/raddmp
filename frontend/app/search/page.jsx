"use client";

// Search. For the shell it filters the already-loaded library on the client.
// When you wire the backend, swap the local filter for api.searchTracks(q) so
// the server does the searching (better for large catalogs).

import { useState } from "react";
import { C } from "../../lib/theme";
import { usePlayer } from "../../lib/store";
import { TrackList } from "../../components/TrackList";
import { TopBar, PageBody, PlanToggle, SearchIcon } from "../../components/ui";

export default function SearchPage() {
  const { library, loading, isPremium } = usePlayer();
  const [query, setQuery] = useState("");
  const results = query ? library.filter((track) => (track.title + track.artist).toLowerCase().includes(query.toLowerCase())) : library;

  return (
    <>
      <TopBar>
        <div className="flex items-center gap-2 rounded-lg px-3 py-2 max-w-md flex-1" style={{ background: C.bg2, border: `1px solid ${C.line}` }}>
          <SearchIcon c={C.faint} />
          <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search songs, artists…" className="bg-transparent outline-none text-sm flex-1" style={{ color: C.text }} />
        </div>
        <PlanToggle premium={isPremium} />
      </TopBar>
      <PageBody>
        <TrackList tracks={results} loading={loading} emptyMsg={query ? "No matches!" : "Search your catalog!"} />
      </PageBody>
    </>
  );
}