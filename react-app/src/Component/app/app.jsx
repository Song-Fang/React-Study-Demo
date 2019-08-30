import React,{Component} from 'react';
import CommentAdd from '../commentAdd/commentAdd';
import CommentList from '../commentList/commentList'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {handleComments,deleteComments} from '../../redux/actions';

class App extends Component{

  static propTypes = {
    comments:PropTypes.array.isRequired,
    handleComments: PropTypes.func.isRequired,
    deleteComments: PropTypes.func.isRequired
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
  state=>({comments:state}),{handleComments,deleteComments}
)(App);
