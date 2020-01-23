import React, {Component} from 'react';
import './commentList.css';
import PropTypes from 'prop-types';
import CommentItems from './commentItems';

class CommentList extends Component{

  static propTypes = {
    deleteComments: PropTypes.func.isRequired
  }

  render(){
    const {comments} = this.props;
    return (
      <div className="col-md-8">
        <h3 className="reply">Reply:</h3>
        <h2 style={{display: comments.length===0?'block':'none'}}>No comments, Click to add comment</h2>
        <ul className="list-group">
          {
            comments.map((comment,index)=><CommentItems comment = {comment} deleteComment = {this.props.deleteComments} key={index} index = {index}/>)
          }
        </ul>
      </div>
    );
  }
}

CommentList.propTypes={
  comments:PropTypes.array.isRequired
}

export default CommentList;
