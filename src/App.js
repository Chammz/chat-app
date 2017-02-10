import React, { Component } from 'react';
import './App.css';
import db from './lib/firebase.js'

class App extends Component {

  render() {
    console.log(db())
    return (
      <div className="App">
        <div className="App-sidebar">
          <h2>Chat App</h2>
        </div>
        <p className="App-body">
          text goes here evenetually.
        </p>
      </div>
    );
  }
}

export default App;
