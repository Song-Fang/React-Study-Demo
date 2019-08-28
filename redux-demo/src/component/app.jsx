import React from 'react';
import {Component} from 'react';
class App extends Component{
  state={
    count:0
  }

  handleAdd = ()=>{
    const {count} = this.state;
    const addedNumber = this.select.value*1;
    const result = count+addedNumber;
    this.setState({count:result});

  }

  handleMinus = ()=>{
    const {count} = this.state;
    const addedNumber = this.select.value*1;
    const result = count-addedNumber;
    this.setState({count:result});

  }



  render(){
    const {count} = this.state;
    return(
    <div>
    <h2>You have clicked {count} times</h2>
    <select ref={select=>this.select=select}>
      <option value='0'>0</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
    </select>
    <button onClick={this.handleAdd} >+</button>
    <button onClick={this.handleMinus}>-</button>
    <button>increment if odd</button>
    <button>increment synchronize</button>
    </div>
  );
  }
}

export default App;
