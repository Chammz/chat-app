import React, { Component } from 'react'
import {Modal, Button, Navbar, FormGroup, FormControl} from 'react-bootstrap';


class NewUser extends Component {

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
         <Modal.Title>Create new user</Modal.Title>
       </Modal.Header>

       <Modal.Body>
         <Navbar.Form>
          <FormGroup>
            <FormControl onChange={this.handleChange} value={input} type="text" placeholder="Enter your username" />
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

export default NewUser
