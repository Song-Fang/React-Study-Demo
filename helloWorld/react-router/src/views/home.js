import React from 'react';
import {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import MyNavLink from '../component/myNavLink';
import News from './news';
import Message from './message';

class Home extends Component{
  render(){
    return (
      <div>
        <h2>Home Route Component</h2>
        <div>
          <ul className='nav nav-tabs'>
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
            </li>
            <li>
            <MyNavLink to='/home/messages'>Messages</MyNavLink>
            </li>
          </ul>
          <div>
          <Switch>
                <Route path="/home/news" component={News}/>
                <Route path="/home/messages" component={Messages}/>
          </Switch>
          <Redirect to = "/home/news"/>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
