export const selectSong = song => {
    // need to return an action
    return {
      type: 'SONG_SELECTED',
      payload: song
    };
};

// this file doesn't need an export default because it has NAMED exports
