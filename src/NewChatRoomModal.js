import React, { Component } from 'react'
import {Modal, Button, Navbar, FormGroup, FormControl} from 'react-bootstrap';
import {createRoom} from './lib/firebase.js'

class NewChatModal extends Component {

  constructor(props) {
    super(props);
    this.state = {input: ""}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    createRoom(this.state.input).then((success) => this.props.fetchRoomData())
    this.setState({showModal: false})
  }

  render() {
    const {input, showModal} = this.props
    return (

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
  );
  }

}

export default NewChatModal
