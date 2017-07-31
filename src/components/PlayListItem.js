import React, { Component } from 'react';

// import styles
import '../styles/App.css';


export default class PlayListItem extends Component {
   constructor(props) {
      super(props);
   }

   render() {
// added shallow filter to sub *crickets* for empty submissions.
// try and get rid of those altogether
   let listOfSongs = this.props.songs.map((song, _id) => {
         if (song.Artist || song.songArtist) {
            return (
              <li key={_id} className="PlayListItem">
                  <div className="label">username</div>
                  <div className="songData">{song.userName}</div>
                  <div className="label">artist / band</div>
                  <div className="songData">{song.songArtist || song.Artist}</div>
                  <div className="label">title</div>
                  <div className="songData">{song.songTitle || song.Title}</div>
                  <div className="label">notes</div>
                  <div className="songData">{song.songNotes || song.Notes}</div>
              </li>
            )
         }
         else {
           return (
             <li key={_id} className= "PlayListItem">
                <div className= "emptyEntry" >
                  crickets
                </div>
                </li>
           )
         }
   })
    return (
        <ul id="ItemList">
          {listOfSongs}
        </ul>

    )
  }
}
