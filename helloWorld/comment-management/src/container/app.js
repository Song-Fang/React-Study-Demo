import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {handleComments,deleteComments,getComments} from '../redux/actions.js';
import CommentAdd from '../component/addComment.js';
import CommentList from '../component/commentList.js';



class App extends Component{

  static propTypes = {
    comments:PropTypes.array.isRequired,
    handleComments: PropTypes.func.isRequired,
    deleteComments: PropTypes.func.isRequired,
    getComments:PropTypes.func.isRequired
  }

  componentDidMount (){
    this.props.getComments();
  }



  render(){
    const {comments} = this.props;
    return(
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>Please write your comments about React</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd addComments={this.props.handleComments}/>
          <CommentList comments = {comments} deleteComments={this.props.deleteComments}/>

        </div>
      </div>
    );
  }
}

export default connect(
  state=>({comments:state.comments}),{handleComments,deleteComments,getComments}
)(App);
