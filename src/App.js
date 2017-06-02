import React, { Component } from 'react';
import './App.css';
import Chat from './Chat.js';
import firebase from 'firebase/app';
import 'firebase/database';
import 'bootstrap/dist/css/bootstrap.css';
global.jQuery = require('jquery');
require ('bootstrap');

class App extends Component {
  constructor(props){
    super(props);
    const config = {
      apiKey: "AIzaSyA-A2nMaN3tAoiP4BpdaBWjb1h9uA1EP6U",
      authDomain: "reactfire-chat-5675c.firebaseapp.com",
      databaseURL: "https://reactfire-chat-5675c.firebaseio.com",
      projectId: "reactfire-chat-5675c",
      storageBucket: "reactfire-chat-5675c.appspot.com",
      messagingSenderId: "917546235450"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div>
      <ul className="nav nav-pills">
        <li role="presentation" className="active"><a href="">Home</a></li>
        <li role="presentation"><a href="">Profile</a></li>
        <li role="presentation"><a href="">Messages</a></li>
      </ul>
        <Chat />
      </div>
    );
  }
}

export default App;
