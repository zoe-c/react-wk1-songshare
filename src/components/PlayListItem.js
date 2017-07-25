import React, { Component } from 'react';

// import parent component
// may not need.
// import PlayList from './PlayList.js'

export default class PlayListItem extends Component {
   constructor(props) {
      super(props);
   }
   render() {
    let listOfSongs = this.props.songs.map((song, _id) => {
      return (
        <li key={_id} className="songsListItem">
          <div className="songData">
            <h4 className="name">Username: {song.username}</h4>
            <h5 className="gender">Artist/Band: {song.artist}</h5>
            <h5 className="eyes">Title: {song.title}</h5>
            <h5>Notes: {song.notes}</h5>
          </div>
        </li>
      )
    })
    return (
      <div className="songsList">
        <ul className="songUl">
          {listOfSongs}
        </ul>
      </div>
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
