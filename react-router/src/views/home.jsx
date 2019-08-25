import React,{Component} from 'react';
import MyNavLink from '../components/MyNavLink';
import {Route,Switch,Redirect} from 'react-router-dom';
import News from './news';
import Messages from './messages';

class Home extends Component{

  render(){
    return (
      <div>
        <h2>Home Route Component</h2>
        <div>
          <ul className='nav nav-tabs'>
            <li>
              <MyNavLink to='/home/news/yes'>News</MyNavLink>
            </li>
            <li>
            <MyNavLink to='/home/messages'>Messages</MyNavLink>
            </li>
          </ul>
          <div>
          <Switch>
                <Route path="/home/news/:yes" component={News}/>
                <Route path="/home/messages" component={Messages}/>
          </Switch>
          <Redirect to = "/home/news/yes"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
