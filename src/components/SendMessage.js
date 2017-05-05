import React, {Component} from 'react';
import cookie from 'react-cookie';

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

  handleSubmit() {
    const data = {
      content: this.state.input,
      roomID:'1',
      sentAt: new Date(),
      username: cookie.load("username"),
    }
    this.props.onSubmit(data)
  }

render(){
  return(
    <div>
      <input onChange={this.handleChange} placeholder="type yo message" />
      <button onClick={this.handleSubmit}>Submit Message</button>
    </div>
  )
  }
}

export default SendMessage;
