import React,{Component} from 'react';
import CommentAdd from '../commentAdd/commentAdd';
import CommentList from '../commentList/commentList'
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  handleComments=(comment)=>{
    const {comments} = this.state;
    comments.unshift(comment);
    this.setState({comments});
  }

  deleteComments = (index)=>{
    const {comments} = this.state;
    comments.splice(index,1);
    this.setState({comments});
  }

  render(){
    const {comments} = this.state;
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
          <CommentAdd addComments={this.handleComments}/>
          <CommentList comments = {comments} deleteComments={this.deleteComments}/>

        </div>
      </div>
    );
  }
}

export default App;
