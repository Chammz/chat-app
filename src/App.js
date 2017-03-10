import React, { Component } from 'react';
import './App.css';
import {fetchRooms, createRoom} from './lib/firebase.js'
import {Modal, Button, Navbar, FormGroup, FormControl} from 'react-bootstrap';

// looking into ES6 code school course
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {rooms: [], showModal: false, input: ""}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // fetch from firebase
    this.fetchRoomData()
  }

  // populates component state
  fetchRoomData = () => {
    fetchRooms().then((res) => {
      // set state value as rooms
      this.setState({rooms: res})
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
    createRoom(this.state.input)
    this.setState({showModal: false})
    this.fetchRoomData()
    // this.forceUpdate();
  }
  // what is this doing?
  render() {
    console.log(Object.keys(this.state.rooms).length)
    // grabbing keys from firebase object
    // console.log(this.state)
    const {rooms, showModal, input} = this.state
    // const rooms = this.state.rooms
    // const showModal = this.state.showModal
    const roomKeys = Object.keys(rooms);
    // console.log(this.state)
    // const {showModal} = this.state

    // room in this.state.rooms
    // this.state.rooms.map
    return (
      <div className="App">
        <div className="modal-container" style={{height: 200}}>

        <Modal
          show={showModal}
          onHide={close}
        >

           <Modal.Header>
             <Modal.Title>Create new room</Modal.Title>
           </Modal.Header>

           <Modal.Body>
             <Navbar.Form>
              <FormGroup>
                <FormControl onChange={this.handleChange} value={input} type="text" placeholder="Enter a Room Name" />
              </FormGroup>
              </Navbar.Form>
           </Modal.Body>


           <Modal.Footer>
             <Button onClick={this.closeModal}>Close</Button>
             <Button onClick={this.handleSubmit}
              bsStyle="primary">Save</Button>
           </Modal.Footer>
         </Modal>
         </div>

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
            {roomKeys.map((room) => (
              <li key={room}>{this.state.rooms[room]}</li>
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
