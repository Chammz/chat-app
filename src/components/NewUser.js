import React, { Component } from 'react'
import {Modal, Button, Navbar, FormGroup, FormControl} from 'react-bootstrap';
import cookie from 'react-cookie';

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

  handleSubmit() {
    this.props.onSubmit(this.state.input)
  }


  render() {
    const {showModal} = this.props
    const {input} = this.state
    const nameTyped = input === ""
    return (
      <Modal
        show={this.props.showModal}
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
         <Button disabled={nameTyped} onClick={this.handleSubmit}
          bsStyle="primary">Save</Button>
       </Modal.Footer>
    </Modal>
    );
  }

}

export default NewUser
//Things to do:
// When saving username, modal does not close
// Need to be able to log the user out
// When entering username anywhere outside modal. Need to fix TypeError.
