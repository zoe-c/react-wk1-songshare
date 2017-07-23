import React, { Component } from 'react';
import '../styles/App.css';

// import components
import NavBar from './NavBar.js'
import PlayList from './PlayList.js'
// import PlayListForm from './PlayListForm.js'

// NOTE: uncomment and use elements below when needed
// <PlayList className="list-item-container" />

class App extends Component {
   constructor() {
      super();
      this.state = {
         playListItems: [
            {
               username: '',
               artist: '',
               title: '',
               notes:''
            },
            {
               username: 'finga',
               artist: 'sample',
               title: 'sample',
               notes:'trying this out. delete this later'
            }
         ]
      }
   }
  render() {
    return (
      <div className="App">
          <NavBar />
          <PlayList playListItems= {this.state.playListItems}/>
      </div>
    );
  }
}

export default App;
