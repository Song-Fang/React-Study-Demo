import React,{Component} from 'react';
import './commentItems.css';
import PropTypes from 'prop-types';
class CommentItems extends Component{

  static propTypes={
    comment:PropTypes.object.isRequired
  }

  render(){
    const {comment} = this.props;
    return(
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;">Delete</a>
        </div>
        <p className="user"><span >{comment.name} </span><span>Said:</span></p>
        <p className="centence">{comment.comment}</p>
      </li>
    );
  }
}

export default CommentItems;
