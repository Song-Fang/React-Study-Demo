import React, {Component} from 'react';

const AllMessages = [
  {id:1,title:'message001',content:'I love China'},
  {id:2,title:'message002',content:'I love My family'},
  {id:3,title:'message003',content:'I love My parents'}
];

class MessageDetails extends Component{

  render(){
    const id = this.props.match.params.id;
    console.log(this.props);
    const message = AllMessages.find((m)=>m.id ===id*1);
    return(
      <ul>
      <li>ID:{message.id}</li>
      <li>Title:{message.title}</li>
      <li>Content:{message.content}</li>
      </ul>
    );
  }
}

export default MessageDetails;
