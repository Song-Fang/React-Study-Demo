import React,{Component} from 'react';
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
      <ul>{
        this.state.messages.map((message,index)=><li key={index}>{message.title}</li>)
      }
      </ul>
    );
  }
}

export default Messages;
