import React, {Component} from 'react';
import './commentList.css';
class CommentList extends Component{
  render(){
    return (
      <div className="col-md-8">
        <h3 className="reply">Reply:</h3>
        <h2 style={{display: 'none'}}>No comments, Click to add comment</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="handle">
              <a href="javascript:;">Delete</a>
            </div>
            <p className="user"><span >Jackie </span><span>Said:</span></p>
            <p className="centence">React is Pretty good!</p>
          </li>
          <li className="list-group-item">
            <div className="handle">
              <a href="javascript:;">Delete</a>
            </div>
            <p className="user"><span >Lynn </span><span>Said:</span></p>
            <p className="centence">React is a bit hard!</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default CommentList;
