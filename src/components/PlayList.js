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

   componentDidMount() {
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
      .then(results => {
            return results.json();
          })
      .then(data => {
            this.setState({songs: data});
            console.log("state", this.state.songs);
          })
      .catch((error) => {
          console.log("Error with Fetching : ", error);
       });
   }

   fetchData = (e) => {
       e.preventDefault();
       fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
       .then(results => {
         return results.json();
       })
       .then(data => {
         this.setState({songs: data});
       })
       .catch((error) => {
          console.log("Error with Fetching : ", error);
      });
   }

  render() {
     let listOfSongs;
     if(this.props.songs) {
       listOfSongs = this.props.songs.map(song => {
          console.log(song)
         return (
            <PlayListItem key={song.title} song={song} />
         );
      });
     }
   //   console.log(this.props)
    return (
      <div className="playlistContainer">
         <button type="submit" className="updateButton" onClick={this.fetchData}>
            Update List
         </button>
         {listOfSongs}
      </div>
    )
  }
}
