import React, { Component } from 'react';

// import styles
import '../styles/App.css';


export default class PlayListItem extends Component {
   constructor(props) {
      super(props);
   }
   render() {
    let listOfSongs = this.props.songs.map((song, _id) => {
      return (
        <li key={_id} className="PlayListItem">
            <div className="label">username</div>
            <div className="songData">{song.userName}</div>
            <div className="label">artist/band</div>
            <div className="songData">{song.songArtist}</div>
            <div className="label">title</div>
            <div className="songData">{song.songTitle}</div>
            <div className="label">notes</div>
            <div className="songData">{song.songNotes}</div>
        </li>
      )
    })
    return (
        <ul id="ItemList">
          {listOfSongs}
        </ul>

    )
  }
}
