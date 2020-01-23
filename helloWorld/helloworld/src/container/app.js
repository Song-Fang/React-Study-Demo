import React from 'react';
import {connect} from 'react-redux';
import {increment,decrement,asyncIncrement} from '../redux/actions.js';
import Counter from '../component/app.js'

export default connect(state=>({
  count:state
}),{increment,decrement,asyncIncrement})(Counter)
