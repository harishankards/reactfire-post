import React, {Component} from 'react';
import * as firebase from 'firebase';
import './chat.css';


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

  componentDidMount(){
    console.log('componentDidMount');
    firebase.database().ref('messages/').on('value',(snapshot)=>{
      const currentMessages = snapshot.val()
      if(currentMessages != null){
        this.setState({
          messages:currentMessages
        })
      }
    })
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
    firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
  //  var list= Object.assign([],this.state.messages)
    //list.push(nextMessage)
    //this.setState({
    //  messages: list
    //})
  }
  render(){
    const currentMessage = this.state.messages.map((message,i) => {
        return(
          <span key={message.id}>{message.text} </span>
        )
    })
    return(
      <div>
        <div className="panel panel-default post-body">
          <div className="panel-body">
            {currentMessage}
          </div>
        </div>
        <div className= "panel panel-default post-editor">
          <div className="panel-body">
            <textarea className="form-control post-editor-input" onChange={this.updateMessage} type="text" placeholder="Enter your message..." />
            <button className="btn btn-success post-editor-button" onClick={this.submitMessage}> Submit </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
