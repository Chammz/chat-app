import React, { Component } from 'react'
import {Modal, Button, Navbar, FormGroup, FormControl} from 'react-bootstrap';

class NewChatModal extends Component {

  constructor(props) {
    super(props);
    this.state = {input: ""}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render() {
    const {input, showModal} = this.props
    return (

    <Modal
      show={showModal}
      onHide={this.props.onClose}
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
         <Button onClick={this.props.onClose}>Close</Button>
         <Button onClick={() => this.props.onSubmit(this.state.input)}
          bsStyle="primary">Save</Button>
       </Modal.Footer>
    </Modal>
  );
  }

}

export default NewChatModal
