# RADDMP

RADDMP (RADD Music Player) is a cloud-based web app for streaming and playing
music. You can build playlists, search and manage your library, and watch a 
real-time visualizer react to the music and shape the sound with a live 
equalizer and audio effects like reverb, distortion, and chorus.

## Features

- **Streaming music player** with playback controls and seeking.
- **Playlists** you can create and edit, with your library persisted to the cloud.
- **Real-time equalizer** — five bands from bass to treble, adjusted live.
- **Audio effects** — reverb, distortion, and chorus, toggled while the song plays.
- **Reactive visualizer** — animated graphics that move with the music.
- **Accounts and plans** — sign up and choose a free or premium tier.

When you sign up you choose a plan. The free plan has limits (a few playlists, a
handful of songs, and limited effects); the premium plan removes those limits,
unlocks every effect, and lets you share a link to listen to a song together with
other people in real time.

## Technology

RADDMP runs on **AWS**. The frontend is built with **Next.js** and **React**, and
the audio processing — the equalizer, effects, and visualizer — happens right in
the browser using the **Web Audio API** and **Canvas**. Behind the scenes, music
files live in **Amazon S3**, song and playlist data lives in **DynamoDB**, and the
app's services run on **AWS Lambda** behind an **API Gateway**, with **JWT** for
authentication.

## Goals

The goal is simple: make music accessible from anywhere, and make listening to it
more fun and hands-on than a typical player — letting people not just hear their
music, but see it and shape it in real time.

