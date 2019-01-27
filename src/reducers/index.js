import { combineReducers } from "redux";

const songReducers = ()=>{
    return [
        {title:"No Scrubs", duration:"4:50"},
        {title:"Macerene", duration:"2:30"},
        {title:"All stars", duration:"3:15"},
        {title:"I want it that way", duration:"1:45"}
    ]
};

const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type=== 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs:songReducers,
    selectedSong: selectedSongReducer
})