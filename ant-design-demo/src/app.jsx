import React from 'react';
import {Component} from 'react';
import {Button,Toast} from 'antd-mobile';
class App extends Component {

  handleClick=()=>{
      Toast.loading('Loading...',2,()=>
      {alert('It has been loaded!')}
    );
  }

  render(){
    return (
      <div>
        <Button onClick={this.handleClick} type="primary">Start</Button>
      </div>
    );
  }
}

export default App;
