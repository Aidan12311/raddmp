export const PLAN_LIMITS = {
    basic: {
        maxPlaylists: 1,
        maxSongsPerPlaylist: 1,
        effects: ["reverb", "chorus"],
    },

    premium: {
        maxPlaylists: Infinity,
        maxSongsPerPlaylist: Infinity,
        effects: ["reverb", "chorus", "distortion"]
    }
};
