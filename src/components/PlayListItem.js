import React, { Component } from 'react';

// import parent component
// may not need.
// commented out.
// import PlayList from './PlayList.js'

export default class PlayListItem extends Component {
  render() {
    return (
      <ul className="item">
         <li>{this.props.item.username}</li>
         <li>{this.props.item.title}</li>
         <li>{this.props.item.artist}</li>
      </ul>
    )
  }
}
