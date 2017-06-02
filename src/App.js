import React, { Component } from 'react';
import './App.css';
import Chat from './Chat.js';
import firebase from 'firebase/app';
import 'firebase/database';

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
        welcome to React-fire chat app
        <Chat />

      </div>
    );
  }
}

export default App;
