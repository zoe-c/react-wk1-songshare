import React, { Component } from 'react';

// import parent component
// may not need.
// commented out.
// import PlayList from './PlayList.js'

export default class PlayListItem extends Component {
  render() {
    return (
      <ul className="songs">
         <li>Username: {this.props.song.username}</li>
         <li>Artist/Band: {this.props.song.artist}</li>
         <li>Title: {this.props.song.title}</li>
         <li>Notes: {this.props.song.notes}</li>
      </ul>
    )
  }
}
