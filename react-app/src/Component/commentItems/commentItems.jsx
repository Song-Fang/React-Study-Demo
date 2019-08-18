import React,{Component} from 'react';
import './commentItems.css';
import PropTypes from 'prop-types';
class CommentItems extends Component{

  static propTypes={
    comment:PropTypes.object.isRequired,
    deleteComment:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired
  }

  handleClick=()=>{
    const {index} = this.props;
    const {comment} = this.props;
    if(window.confirm(`Are you sure to delete ${comment.name}'s comments?`)){
      this.props.deleteComment(index);
    }
  }

  render(){
    const {comment} = this.props;
    return(
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick = {this.handleClick}>Delete</a>
        </div>
        <p className="user"><span >{comment.name} </span><span>Said:</span></p>
        <p className="centence">{comment.comment}</p>
      </li>
    );
  }
}

export default CommentItems;
