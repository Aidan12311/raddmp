"use client";

import { C, frost } from "../lib/theme";
import { usePlayer } from "../lib/store";
import { useState, useRef, useEffect } from "react";
import { Modal, Field, BtnPrimary, BtnGhost, PlusIcon, MenuItem, Artwork } from "./ui";

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
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [file, setFile] = useState(null);
  const [cover, setCover] = useState(null);
  const [busy, setBusy] = useState(false);
  const [coverPreview, setCoverPreview] = useState(null);

  useEffect(() => {
    if (!cover) {
      setCoverPreview(null);
      return;
    }

    const coverUrl = URL.createObjectURL(cover);
    setCoverPreview(coverUrl);

    return () => URL.revokeObjectURL(coverUrl);
  }, [cover]);

  const audioInput = useRef(null);
  const coverInput = useRef(null);

  const pickAudio = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    setFile(file);
  
    if (!title) {
      const fileName = file.name.replace(/\.[^/.]+$/, "");
      setTitle(fileName);
    }
  }

  const pickCover = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    setCover(file);
  }

  const submit = async () => {
    if (!file || busy) {
      return;
    }

    setBusy(true);

    try {
      await uploadTrack({ file, cover, title: title.trim(), artist: artist.trim() });
      closeModal();
    }
    finally {
      setBusy(false);
    }
  }

  return (
    <Modal title="Add a song" onClose={closeModal}
      footer={<><BtnGhost onClick={closeModal}>Cancel</BtnGhost>
              <BtnPrimary onClick={submit} disabled={!file || busy}>
                {busy ? "Adding…" : "Add to library"}
              </BtnPrimary></>}>

      <input ref={audioInput} type="file" accept="audio/*" onChange={pickAudio} className="hidden" />
      <button onClick={() => audioInput.current?.click()}
        className="w-full rounded-xl border border-dashed flex flex-col items-center justify-center py-6 mb-3 hover:bg-white/5 transition-colors"
        style={{ borderColor: C.line, color: C.faint }}>
        <PlusIcon c={C.faint} />
        <span className="text-[12px] mt-2">{file ? file.name : "Choose an audio file!"}</span>
      </button>

      <input ref={coverInput} type="file" accept="image/*" onChange={pickCover} className="hidden" />
      <button onClick={() => coverInput.current?.click()}
        className="w-full rounded-xl border border-dashed flex items-center gap-3 px-3 py-3 mb-4 hover:bg-white/5 transition-colors"
        style={{ borderColor: C.line, color: C.faint }}>
        <div className="w-12 h-12 rounded-md shrink-0 bg-cover bg-center"
          style={coverPreview
            ? { backgroundImage: `url(${coverPreview})` }
            : { background: `linear-gradient(135deg, ${C.a1}, ${C.a2})` }} />
        <span className="text-[12px]">{cover ? cover.name : "Choose a cover image (optional)"}</span>
      </button>

      <label className="block text-[11px] font-medium mb-1.5" style={{ color: C.sub }}>Title</label>
      <div className="mb-3"><Field value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Track title" /></div>
      <label className="block text-[11px] font-medium mb-1.5" style={{ color: C.sub }}>Artist</label>
      <Field value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Artist name" />
    </Modal>
  );
}

function AddSongsModal({ playlistId }) {
  const { closeModal, library, playlists, addToPlaylist, removeFromPlaylist } = usePlayer();
  
  const playlist = playlists.find((p) => p.id === playlistId);
  if (!playlist) {
    return null;
  }

  return (
    <Modal wide title={`Add songs · ${playlist.name}`} onClose={closeModal} footer={<BtnPrimary onClick={closeModal}>Done</BtnPrimary>}>
      <div className="flex flex-col gap-1 max-h-80 overflow-y-auto radd-scroll">
        {library.length === 0 && <p className="text-[13px] text-center py-6" style={{ color: C.sub }}>Your library is empty.</p>}
        {library.map((track) => {
          const inList = playlist.tracks.includes(track.id);
          return (
            <div key={track.id} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5">
              <Artwork track={track} className="w-10 h-10 rounded-md shrink-0" />
              <div className="flex-1 min-w-0"><div className="text-[13px] font-medium truncate">{track.title}</div><div className="text-[11px] truncate" style={{ color: C.sub }}>{track.artist}</div></div>
              <button onClick={() => (inList ? removeFromPlaylist(track.id, playlist.id) : addToPlaylist(track.id, playlist.id))} className="text-[12px] font-medium px-2.5 py-1 rounded-md" style={{ color: inList ? C.faint : "#0a0a0a", background: inList ? "transparent" : `linear-gradient(90deg, ${C.a1}, ${C.a2})`, border: inList ? `1px solid ${C.line}` : "none" }}>{inList ? "Remove" : "Add"}</button>
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
            <Artwork track={t} className="w-10 h-10 rounded-md shrink-0" />
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