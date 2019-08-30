import React from 'react';
import {connect} from 'react-redux';
import Counter from '../component/counter';
import {increment,decrement,incrementAsync} from '../redux/actions'

export default connect(
  state =>({count:state}),{increment,decrement,incrementAsync}
)(Counter);
