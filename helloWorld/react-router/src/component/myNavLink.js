import React from 'react';
import {Component} from 'react';
import {NavLink} from 'react-router-dom';

class MyNavLink extends Component{

  render(){
    return(
      <NavLink {...this.props} activeClassName="activeClass"/>
    );
  }
}

export default MyNavLink;
