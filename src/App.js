import React, { Component } from 'react';
import './css/App.css';
import {fetchRooms,fetchMessages, createRoom, createMessage} from './lib/firebase';
import {Modal, Button, Navbar, FormGroup, FormControl} from 'react-bootstrap';
import  ListMessage from './components/ListMessage';
import NewChatRoomModal from './components/NewChatRoomModal'
import NewUser from './components/NewUser'
import SendMessage from './components/SendMessage'
import cookie from 'react-cookie'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      rooms: [],
      showModal: false,
      currentRoom: null,
      username: cookie.load("username") || null
     }

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

  handleSubmit(data) {
    createRoom(data).then((res) => this.fetchRoomData())
    this.setState({showModal: false})
  }

  saveUser = (input) => {
    cookie.save('username', input)
    this.setState({username: input})
  }

  render() {
    const {username, rooms, messages, showModal, input} = this.state
    const mappedMessages = Object.keys(messages).map((key) => messages[key])
    const roomKeys = Object.keys(rooms);

    return (
      <div className="App">
        <NewChatRoomModal
          onClose={this.closeModal}
          onSubmit={this.handleSubmit}
          showModal={this.state.showModal}
        />

        <NewUser
          showModal={!this.state.username}
          onSubmit={this.saveUser}
        />
        <div className="App-sidebar">
          <h2>Chat App</h2>
          {username && <p>{username} is logged in</p>}
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
              <a onClick={() => this.setState({currentRoom: /* not sure what goes here */})}><li key={key}>{rooms[key]}</li></a>

            ))}
          </ul>
        </div>


        <div className="App-body">
          <div>
            {
              mappedMessages.length > 0 ? <ListMessage messages={mappedMessages} /> : 'Loading messages…'
            }
          </div>

          {
            this.state.currentRoom != null ? <SendMessage onSubmit={createMessage} />
          : 'Please Choose a room'
          }
        </div>
      </div>
    );
  }
}

export default App;
