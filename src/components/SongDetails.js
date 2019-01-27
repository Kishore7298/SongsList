import React from 'react';
import { connect } from "react-redux";


const SongDetails = ({ song })=>{
    if(!song)
        return (
            <div></div>
        );
    return (
        <div>
            <p><b>Details are:</b></p>
            <p>title:{song.title}</p>
            <p>duration:{song.duration}</p>
        </div>
    );
}
const mapStateToProps = (state)=>{
    return {
        song:state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails);