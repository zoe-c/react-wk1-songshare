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
            <div className="songData">{song.username}</div>
            <div className="label">artist/band</div>
            <div className="songData">{song.artist}</div>
            <div className="label">title</div>
            <div className="songData">{song.title}</div>
            <div className="label">notes</div>
            <div className="songData">{song.notes}</div>
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
