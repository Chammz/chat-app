import React, {Component} from 'react';
import {createRoom, createMessage} from './lib/firebase';
import SendMessage from './components/SendMessage'
import Messages from './components/Messages'
import {fetchMessages} from './lib/firebase'

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoom: props.params.roomName,
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFetchMessages = this.handleFetchMessages.bind(this);
  }

  componentDidMount() {
    // fetch from firebase
    this.handleFetchMessages()
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(data) {
    createRoom(data).then((res) => this.fetchRoomData())
    this.setState({showModal: false})
  }

  handleFetchMessages = () => {
    fetchMessages().then((res) => {
      this.setState({messages: res, messageCount: Object.keys(res).length})

    })
  }

  handleCreateMessage = (data)=>{
    createMessage(data)
    this.handleFetchMessages();
  }

  render() {
    const {messages, currentRoom} = this.state
    // Filter these messages by the currentRoom
    const mappedMessages = messages ? Object.keys(messages).map((key) => messages[key]) : [];

    return (
      <div>
        <Messages mappedMessages={mappedMessages} />
          <SendMessage
           currentRoom={currentRoom}
           onSubmit={this.handleCreateMessage}
        />
      </div>
    );
  }
}

export default Room;
