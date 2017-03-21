import React, { Component } from 'react';
import './App.css';
import {fetchRooms, createRoom} from './lib/firebase.js'
import {Button} from 'react-bootstrap';
import Modal from "./NewChatRoomModal"

// looking into ES6 code school course
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {rooms: [], showModal: false}
  }
  componentDidMount() {
    // fetch from firebase
    this.fetchRoomData()
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  // populates component state
  fetchRoomData = () => {
    fetchRooms().then((res) => {
      this.setState({rooms: res, showModal: false})
    })
  }

  // what is this doing?
  render() {
    const {rooms, showModal, input} = this.state
    const roomKeys = Object.keys(rooms);

    return (
      <div className="App">
        <div className="modal-container" style={{height: 200}}>


         </div>
        <Modal
          showModal={showModal}
          input={input} fetchRoomData={() => this.fetchRoomData()}
        />
        <div className="App-sidebar">
          <h2>Chat App</h2>
          <div className="chat-modal">
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={this.openModal}
              >
              New Room
            </Button>
          </div>
          <ul>
            {roomKeys.map((key) => (
              <li key={key}>{rooms[key]}</li>
            ))}
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
