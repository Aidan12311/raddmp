export const PLAN_LIMITS = {
    basic: {
        maxPlaylists: 3,
        maxSongsPerPlaylist: 5,
        effects: ["reverb", "chorus"],
    },

    premium: {
        maxPlaylists: Infinity,
        maxSongsPerPlaylist: Infinity,
        effects: ["reverb", "chorus", "distortion"]
    }
};