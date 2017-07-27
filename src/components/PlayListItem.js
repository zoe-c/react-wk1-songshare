import React, { Component } from 'react';

// import styles
import '../styles/App.css';

// import parent component
// may not need.
// import PlayList from '../styles/PlayList.css'

export default class PlayListItem extends Component {
   constructor(props) {
      super(props);
   }
   render() {
    let listOfSongs = this.props.songs.map((song, _id) => {
      return (
        <li key={_id} className="PlayListItem">
          <div className="songData">
            <h3 className="label">Username:</h3>
               <h5>{song.username}</h5>
            <h3 className="label">Artist/Band:</h3>
               <h5>{song.artist}</h5>
            <h3 className="label">Title:</h3>
               <h5>{song.title}</h5>
            <h3 className="label">Notes:</h3>
               <h5>{song.notes}</h5>
          </div>
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
//   render() {
//     return (
//       <ul className="songs">
//          <li>Username: {this.props.song.username}</li>
//          <li>Artist/Band: {this.props.song.artist}</li>
//          <li>Title: {this.props.song.title}</li>
//          <li>Notes: {this.props.song.notes}</li>
//       </ul>
//     )
//   }
// }
