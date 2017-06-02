import React, {Component} from 'react';

class Chat extends Component{
  constructor(props,context){
    super(props, context)
    this.updateMessage = this.updateMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    this.state = {
      message: '',
      messages: [
      ]
    }
  }
  updateMessage(event){
    this.setState({
      message: event.target.value
    })
  }

  submitMessage(event){
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }
    var list= Object.assign([],this.state.messages)
    list.push(nextMessage)
    this.setState({
      messages: list
    })
  }
  render(){
    const currentMessage = this.state.messages.map((message) => {
        return(
          <li key={message.id}>{message.text}</li>
        )
    })
    return(
      <div>
        <ol>
          {currentMessage}
        </ol>
          <input onChange={this.updateMessage} type="text" placeholder="Enter your message..." />
          <button onClick={this.submitMessage}> Submit </button>
      </div>
    );
  }
}

export default Chat;
