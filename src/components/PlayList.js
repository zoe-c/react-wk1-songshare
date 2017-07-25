import React, { Component } from 'react';

// import child component
import PlayListItem from './PlayListItem.js'

export default class PlayList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         songs: [],
      }
   }

  render() {
     let listOfItems;
     if(this.props.playlist) {
       listOfItems = this.props.playlist.map(item => {
          console.log(item)
         return (
            <PlayListItem key={item.title} item={item} />
         );
      });
     }
   //   console.log(this.props)
    return (
      <div className="playlist-container">
         {listOfItems}
      </div>
    )
  }
}
