import React from 'react';
import {connect} from 'react-redux';
import Counter from '../component/counter';
import {increment,decrement} from '../redux/actions'

export default connect(
  state =>({count:state}),{increment,decrement}
)(Counter);
