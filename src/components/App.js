import React, { Component } from 'react';
import '../styles/App.css';

// import components
import NavBar from './NavBar.js'
import PlayList from './PlayList.js'
import PlayListForm from './PlayListForm.js'

// NOTE: uncomment and use elements below when needed
// <PlayList className="list-item-container" />

class App extends Component {
   constructor() {
      super();
      this.state = {
         playlist: [
            {
               username: '',
               artist: '',
               title: '',
               notes:''
            }
         ]
      }
   }
// NOTE: demo suggests either. lecture suggests DidMount.
 //  componentWillMount(){
 //     this.setState({playlist: []})
 // }

//  componentDidMount(){
//     fetch()
//     .then(results => results.json())
//     .then(responseData =>)
// }
  render() {
    return (
      <div className="App">
          <NavBar />
          <div className= "contentContainer">
          <PlayListForm />
          <PlayList playlist= {this.state.playlist}/>
          </div>

      </div>
    );
  }
}

export default App;
