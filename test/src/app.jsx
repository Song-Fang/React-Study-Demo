import React,{Component} from 'react';
import logo from './logo.svg';
import './index.css';
class App extends Component{
  render(){
    return (
      <div className="mainDiv">
        <img src={logo} className="imageSize" alt="logo"/>
        <h2>Hello World!</h2>
      </div>
    );
  }
}
export default App;
