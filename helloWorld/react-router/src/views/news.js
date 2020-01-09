import React from 'react';
import {Component} from 'react';

class News extends Component{
  state = {
    content:['news001','news002','news003']
  }

  render(){
    return(
      <ul>
      {
        this.state.content.map((item,index)=><li key={index}>{item}</li>)
      }
      </ul>
    );
  }
}

export default News;
