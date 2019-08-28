import React from 'react';
import {Component} from 'react';

import * as actions from '../redux/actions'
class App extends Component{

  handleAdd = ()=>{
    const number = this.select.value*1;
    this.props.store.dispatch(actions.increment(number));

  }

  handleMinus = ()=>{
    const number = this.select.value*1;
    this.props.store.dispatch(actions.decrement(number));

  }

  handleOdd = ()=>{
    const number = this.select.value*1;
    const count = this.props.store.getState();
    if(count%2!==0){
      this.props.store.dispatch(actions.increment(number));
    }

  }

  handleAsync=()=>{
    setTimeout(()=>{
      const number = this.select.value*1;
      this.props.store.dispatch(actions.increment(number));
      },
      2000);
  }



  render(){
    const count = this.props.store.getState();
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
    <button onClick={this.handleOdd}>increment if odd</button>
    <button onClick={this.handleAsync}>increment Asynchronize</button>
    </div>
  );
  }
}

export default App;
