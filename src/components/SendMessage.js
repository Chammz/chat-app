import React, {Component} from 'react';
import cookie from 'react-cookie';
import uuidV1 from 'uuid/v1';

class SendMessage extends Component {

  constructor(props) {
    super(props);
    this.state = {input: ""}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(props) {
    const data = {
      content: this.state.input,
      roomId: this.props.currentRoom,
      messageId: uuidV1(),
      sentAt: new Date(),
      username: cookie.load("username"),
    }
    
    this.props.onSubmit(data)
  }

render(){
  return(
    <div>
      <input className="flexcontainer messageinput" onChange={this.handleChange} placeholder="type yo message" />
      <button className="flexcontainer messagebutton"onClick={this.handleSubmit}>Submit Message</button>
    </div>
  )
  }
}

export default SendMessage;
