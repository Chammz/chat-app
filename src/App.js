import React, { Component } from 'react';
import './App.css';
import {fetchRooms, anotherOne} from './lib/firebase.js'

class App extends Component {

  render() {
    anotherOne()
    fetchRooms().then(function(res) {
      console.log(res)
    })

    return (
      <div className="App">
        <div className="App-sidebar">
          <h2>Chat App</h2>
          <ul>
            <li>Room 1</li>
            <li>Room 2</li>
            <li>Room 3</li>
          </ul>
        </div>
        <p className="App-body">
          text goes here evenetually.
        </p>
      </div>
    );
  }
}

export default App;
