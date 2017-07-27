import React, { Component } from 'react';

// import styles (*use app.css, then drag over to sep stylesheet)
// import '../styles/PlayList.css';
import '../styles/App.css';

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
         console.log(this.state)
         this.setState({songs: data});
       })
       .catch((error) => {
          console.log("Error with Fetching : ", error);
      });
   }
  render() {
   //   console.log(this.props)
    return (
      <div className="playListContainer">
         <button type="submit" id="updateButton"  onClick={this.fetchData}>
            update
         </button>
         <PlayListItem songs={this.state.songs} />
      </div>
    )
  }
}
