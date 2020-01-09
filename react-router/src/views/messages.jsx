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

  showDetail=(id)=>{
    this.props.history.push(`/home/messages/messageContent/${id}`);
  }

  showDetail2=(id)=>{
    this.props.history.replace(`/home/messages/messageContent/${id}`);
  }

  back=()=>{
    this.props.history.goBack();
  }

  forward=()=>{
    this.props.history.goForward();
  }

  reqPage=()=>{
    window.location="http://www.google.com";
  }

  render(){
    return(
    <div>
      <ul>{
        this.state.messages.map((message,index)=><li key={index}>
        <MyNavLink to={`/home/messages/messageContent/${message.id}`} >
        {message.title}
        </MyNavLink>
           <button onClick={()=>this.showDetail(message.id)}>push()Show Detail</button>
           <button onClick={()=>this.showDetail2(message.id)}>replace()Show Detail</button>
        </li>
      )
      }
      </ul>


        <button onClick={this.forward}>Forward</button>
        <button onClick={this.back}>Back</button>
        <button onClick={this.reqPage}>Go to Google</button>

      <Route path="/home/messages/messageContent/:id" component={MessageDetail}/>
    </div>
    );
  }
}

export default Messages;
