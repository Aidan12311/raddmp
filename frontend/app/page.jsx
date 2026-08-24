"use client";

// The library. It reads `library` from the store — which was filled by the
// server in layout.jsx — so on first load the list is already in the HTML.
// (This is a client component so it can use the store, but it is STILL
// server-rendered on the first request. "use client" only adds browser
// interactivity on top.)

import { usePlayer } from "../lib/store";
import { TopBar, PageBody, PlanChip, GradientBtn, PlusIcon } from "../components/ui";
import { TrackList } from "../components/TrackList";

export default function LibraryPage() {
  const { library, loading, isPremium, openModal } = usePlayer();
  return (
    <>
      <TopBar>
        <h1 className="text-lg font-semibold tracking-tight flex-1">Your Library</h1>
        <GradientBtn onClick={() => openModal({ type: "upload" })}><PlusIcon /> Add song</GradientBtn>
        <PlanChip premium={isPremium} />
      </TopBar>
      <PageBody>
        <TrackList tracks={library} loading={loading} emptyMsg="No songs loaded!" />
      </PageBody>
    </>
  );
}