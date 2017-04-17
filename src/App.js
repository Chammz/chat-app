import React, { Component } from 'react';
import './App.css';
import {fetchRooms,fetchMessages, createRoom} from './lib/firebase.js';
import {Modal, Button, Navbar, FormGroup, FormControl} from 'react-bootstrap';
import  ListMessage from './ListMessage';
import NewChatRoomModal from './NewChatRoomModal.js'
import NewUser from './NewUser.js'

// looking into ES6 code school course
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: [], rooms: [], showModal: false, input: ""}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // fetch from firebase
    this.fetchRoomData()
    this.fetchMessages()
  }

  // populates component state
  fetchRoomData = () => {
    fetchRooms().then((res) => {
      this.setState({rooms: res})
    })
  }

  fetchMessages = () => {
    fetchMessages().then((res) => {
      this.setState({messages: res})
    })
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    createRoom(this.state.input).then((res) => this.fetchRoomData())
    this.setState({showModal: false})
  }
  // what is this doing?
  render() {
    const {rooms, messages, showModal, input} = this.state
    const mappedMessages = Object.keys(messages).map((key) => messages[key])
    const roomKeys = Object.keys(rooms);

    return (
      <div className="App">
        <NewChatRoomModal
          onClose={this.closeModal}
          onSubmit={this.handleSubmit}
          showModal={this.state.showModal}
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


        <div className="App-body">
          <div>
            {
              mappedMessages.length > 0 ? <ListMessage messages={mappedMessages} /> : 'Loading messages…'
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
