import React, { Component } from 'react';

// import styles (*use app.css, then drag over to sep stylesheet)
// import '../styles/PlayListForm.css';
import '../styles/App.css';

export default class PlayListForm extends Component {
   constructor(props) {
      super(props);
      this.handleName = this.handleName.bind(this);
      this.handleArtist = this.handleArtist.bind(this);
      this.handleTitle = this.handleTitle.bind(this);
      this.handleNotes = this.handleNotes.bind(this);

      this.state = {
         songs:[],
         userName: '',
         songArtist: '',
         songTitle: '',
         songNotes: ''

      }

   }
   handleName(event){
   this.setState({userName: event.target.value});
   }
   handleArtist(event){
   this.setState({songArtist: event.target.value});
   }
   handleTitle(event){
   this.setState({songTitle: event.target.value});
   }
   handleNotes(event){
   this.setState({songNotes: event.target.value});
   }

   addToList = (e) => {
       e.preventDefault();
       this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
       let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
         method: "POST",
         body: listItem,
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         }
     })
     .then(response => {
       console.log(response, "yay");
     }).catch(err => {
       console.log(err, "boo!");
     });
     this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
   }

  render() {
    return (
      <div className= "formContainer">
         <form>
            <div className="fieldsetDivs">
               <label className= "formLabels" htmlFor="user">user name:</label>
               <input  onChange={this.handleName}
                       type="text"
                       className="form-control"
                       id="user"
                       placeholder=""
                       value={this.state.userName}/>
            </div>
            <div className="fieldsetDivs">
               <label className= "formLabels" htmlFor="artist">artist/band:</label>
               <input  onChange={this.handleArtist}
                       type="text"
                       className="form-control"
                       id="artist"
                       placeholder=""
                       value={this.state.songArtist}/>
            </div>
            <div className="fieldsetDivs">
               <label className="formLabels" htmlFor="title">song title:</label>
               <input  onChange={this.handleTitle}
                       type="text"
                       className="form-control"
                       id="title"
                       placeholder=""
                       value={this.state.songTitle}/>
            </div>
            <div className="fieldsetDivs">
               <label className="formLabels" htmlFor="notes">notes about song:</label>
               <input  onChange={this.handleNotes}
                       type="text"
                       className="form-control"
                       id="notes"
                       placeholder=""
                       value={this.state.songNotes}/>
            </div>
            <input id="infoSubButton" type="submit" value="submit" onClick={this.addToList} />

         </form>
      </div>

    )
  }
}
