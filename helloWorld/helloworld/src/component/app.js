import React from 'react';
import {Component} from 'react';

import PropTypes from 'prop-types';

class Counter extends Component{

static propTypes ={
  count:PropTypes.number.isRequired,
  increment:PropTypes.func.isRequired,
  decrement:PropTypes.func.isRequired,
  asyncIncrement:PropTypes.func.isRequired
}

hanldeAdd = ()=>{
  const number = this.opts.value*1;
  this.props.increment(number);
}

handleMinus = ()=>{
  const number = this.opts.value*1;
  this.props.decrement(number);
}

handleOdd = ()=>{
  if(this.props.count%2!==0){
    const number = this.opts.value*1;
    this.props.increment(number);
  }
}


handleSync = ()=>{

  const number = this.opts.value*1;
  this.props.asyncIncrement(number);

}

  render(){
    return(
      <div>

      <h3 >Click {this.props.count} times</h3>
        <select ref = {opt=>this.opts=opt}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button onClick={this.hanldeAdd}>+</button>
        <button onClick={this.handleMinus}>-</button>
        <button onClick={this.handleOdd}>increment if odd</button>
        <button onClick={this.handleSync}>increment async</button>
      </div>
    );
  }
}

export default Counter;
