"use client";

import { useState } from "react";
import { usePlayer } from "../lib/store";
import { C, frost } from "../lib/theme";
import { Modal, Field, BtnPrimary, BtnGhost, PlusIcon, MenuItem } from "./ui";

/* Reads the store's overlay state (modal / menu) and renders whichever is open.
   Mounted once in the shell so any page can trigger these. */
export function Overlays() {
  const { modal, menu } = usePlayer();
  return (
    <>
      {modal?.type === "createPlaylist" && <CreatePlaylistModal />}
      {modal?.type === "upload" && <UploadModal />}
      {modal?.type === "addSongs" && <AddSongsModal playlistId={modal.playlistId} />}
      {modal?.type === "queue" && <QueueModal />}
      {menu && <TrackMenu />}
    </>
  );
}

function CreatePlaylistModal() {
  const { closeModal, createPlaylist } = usePlayer();
  const [name, setName] = useState("");
  return (
    <Modal title="Create playlist" onClose={closeModal} footer={<><BtnGhost onClick={closeModal}>Cancel</BtnGhost><BtnPrimary onClick={() => createPlaylist(name.trim())}>Create</BtnPrimary></>}>
      <label className="block text-[11px] font-medium mb-1.5" style={{ color: C.sub }}>Name</label>
      <Field autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Study Session" onKeyDown={(e) => e.key === "Enter" && createPlaylist(name.trim())} />
    </Modal>
  );
}

function UploadModal() {
  const { closeModal, uploadTrack } = usePlayer();
  const [title, setTitle] = useState(""); const [artist, setArtist] = useState("");
  return (
    <Modal title="Add a song" onClose={closeModal} footer={<><BtnGhost onClick={closeModal}>Cancel</BtnGhost><BtnPrimary onClick={() => uploadTrack({ title: title.trim(), artist: artist.trim() })}>Add to library</BtnPrimary></>}>
      <div className="rounded-xl border border-dashed flex flex-col items-center justify-center py-7 mb-4" style={{ borderColor: C.line, color: C.faint }}>
        <PlusIcon c={C.faint} /><span className="text-[12px] mt-2">Drop an MP3 here (wire the upload later)</span>
      </div>
      <label className="block text-[11px] font-medium mb-1.5" style={{ color: C.sub }}>Title</label><div className="mb-3"><Field autoFocus value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Track title" /></div>
      <label className="block text-[11px] font-medium mb-1.5" style={{ color: C.sub }}>Artist</label><Field value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Artist name" />
    </Modal>
  );
}

function AddSongsModal({ playlistId }) {
  const { closeModal, library, playlists, addToPlaylist, removeFromPlaylist } = usePlayer();
  const playlist = playlists.find((p) => p.id === playlistId);
  if (!playlist) return null;
  return (
    <Modal wide title={`Add songs · ${playlist.name}`} onClose={closeModal} footer={<BtnPrimary onClick={closeModal}>Done</BtnPrimary>}>
      <div className="flex flex-col gap-1 max-h-80 overflow-y-auto radd-scroll">
        {library.length === 0 && <p className="text-[13px] text-center py-6" style={{ color: C.sub }}>Your library is empty.</p>}
        {library.map((t) => {
          const inList = playlist.tracks.includes(t.id);
          return (
            <div key={t.id} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5">
              <div className="w-9 h-9 rounded-md shrink-0" style={{ background: `linear-gradient(135deg, ${t.g1}, ${t.g2})` }} />
              <div className="flex-1 min-w-0"><div className="text-[13px] font-medium truncate">{t.title}</div><div className="text-[11px] truncate" style={{ color: C.sub }}>{t.artist}</div></div>
              <button onClick={() => (inList ? removeFromPlaylist(t.id, playlist.id) : addToPlaylist(t.id, playlist.id))} className="text-[12px] font-medium px-2.5 py-1 rounded-md" style={{ color: inList ? C.faint : "#0a0a0a", background: inList ? "transparent" : `linear-gradient(90deg, ${C.a1}, ${C.a2})`, border: inList ? `1px solid ${C.line}` : "none" }}>{inList ? "Remove" : "Add"}</button>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}

function QueueModal() {
  const { closeModal, queue, library, playTrack } = usePlayer();
  const tracks = queue.map((id) => library.find((t) => t.id === id)).filter(Boolean);
  return (
    <Modal title={`Queue · ${tracks.length}`} onClose={closeModal}>
      {tracks.length === 0 ? <p className="text-[13px] text-center py-6" style={{ color: C.sub }}>Nothing queued yet. Use a track's ⋯ menu to add.</p> : (
        <div className="flex flex-col gap-1 max-h-80 overflow-y-auto radd-scroll">{tracks.map((t, i) => (
          <button key={i} onClick={() => { playTrack(t.id); closeModal(); }} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 text-left">
            <span className="text-[12px] font-mono w-5 text-center" style={{ color: C.faint }}>{i + 1}</span>
            <div className="w-8 h-8 rounded-md shrink-0" style={{ background: `linear-gradient(135deg, ${t.g1}, ${t.g2})` }} />
            <div className="min-w-0"><div className="text-[13px] font-medium truncate">{t.title}</div><div className="text-[11px] truncate" style={{ color: C.sub }}>{t.artist}</div></div>
          </button>))}</div>
      )}
    </Modal>
  );
}

function TrackMenu() {
  const { menu, closeMenu, playlists, playTrack, addToQueue, addToPlaylist } = usePlayer();
  const [sub, setSub] = useState(false);
  const x = Math.min(menu.x, window.innerWidth - 210), y = Math.min(menu.y, window.innerHeight - 220);
  return (
    <div className="fixed" style={{ left: x, top: y, zIndex: 65 }} onClick={(e) => e.stopPropagation()}>
      <div className="w-52 rounded-xl overflow-hidden py-1" style={{ ...frost("rgba(26,26,31,0.96)"), border: `1px solid ${C.line}` }}>
        <MenuItem label="Play now" onClick={() => { playTrack(menu.trackId); closeMenu(); }} />
        <MenuItem label="Add to queue" onClick={() => { addToQueue(menu.trackId); closeMenu(); }} />
        <MenuItem label="Add to playlist ▸" onClick={() => setSub((s) => !s)} />
        {sub && (
          <div className="mt-1 mx-1 rounded-lg py-1" style={{ background: "rgba(0,0,0,0.25)" }}>
            {playlists.length === 0 && <div className="px-3 py-1.5 text-[12px]" style={{ color: C.faint }}>No playlists</div>}
            {playlists.map((p) => <MenuItem key={p.id} small label={p.name} onClick={() => { addToPlaylist(menu.trackId, p.id); closeMenu(); }} />)}
          </div>
        )}
      </div>
    </div>
  );
}