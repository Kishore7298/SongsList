//select song is a action creator
export const selectSong = (song)=>{
    return { //returned action
        type:"SONG_SELECTED",
        payload:song
    }
}