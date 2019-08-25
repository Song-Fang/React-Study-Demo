import React,{Component} from 'react';
import MyNavLink from '../components/MyNavLink';
import {Route} from 'react-router-dom'
import MessageDetail from './message-detail'
class Messages extends Component{
  state = {
    messages:[

    ]
  }

  componentDidMount(){
    setTimeout(()=>{
      const messages = [
        {id:1,title:'message001'},
        {id:2,title:'message002'},
        {id:3,title:'message003'}
      ];
      this.setState({messages});
    },1000);
  }

  render(){
    return(
    <div>
      <ul>{
        this.state.messages.map((message,index)=><li key={index}>
        <MyNavLink to={`/home/messages/messageContent/${message.id}`} >
        {message.title}
        </MyNavLink>
        </li>
      )
      }
      </ul>
      <Route path="/home/messages/messageContent/:id" component={MessageDetail}/>
    </div>
    );
  }
}

export default Messages;
