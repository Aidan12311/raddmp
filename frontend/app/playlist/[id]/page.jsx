"use client";

// A single playlist. `useParams()` gives the [id] from the URL. It looks the
// playlist up in the store (SSR-seeded) and expands its track ids into full
// track objects from the library. Because both came from the server fetch, the
// songs are already on screen at first paint — the SSR behavior you wanted.

import { useParams } from "next/navigation";
import { usePlayer } from "../../../lib/store";
import { TopBar, PageBody, PlanChip, GradientBtn, PlusIcon, Empty } from "../../../components/ui";
import { TrackList } from "../../../components/TrackList";

export default function PlaylistPage() {
  const { id } = useParams();
  const { playlists, library, loading, isPremium, openModal } = usePlayer();

  const playlist = playlists.find((p) => p.id === id);
  const tracks = playlist ? playlist.tracks.map((tid) => library.find((t) => t.id === tid)).filter(Boolean) : [];

  return (
    <>
      <TopBar>
        <h1 className="text-lg font-semibold tracking-tight flex-1">{playlist?.name ?? "Playlist"}</h1>
        {playlist && <GradientBtn onClick={() => openModal({ type: "addSongs", playlistId: id })}><PlusIcon /> Edit Playlist</GradientBtn>}
        <PlanChip premium={isPremium} />
      </TopBar>
      <PageBody>
        {loading ? <Empty msg="Loading…" /> : !playlist ? <Empty msg="Playlist not found." /> : <TrackList tracks={tracks} emptyMsg="This playlist is empty." />}
      </PageBody>
    </>
  );
}
