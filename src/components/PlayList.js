import React, { Component } from 'react';

// import child component
import PlayListItem from './PlayListItem.js'

export default class PlayList extends Component {

  render() {
     let playListItems;
     if(this.props.playListItems){
       playListItems = this.props.playListItems.map(item => {
          console.log(item)
         return (
            <PlayListItem key={item.title} item={item} />
         );
      });
     }
   //   console.log(this.props)
    return (
      <div className="playlist-container">
         {playListItems}
      </div>
    )
  }
}
