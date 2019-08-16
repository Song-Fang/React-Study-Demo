import React,{Component} from 'react';
import CommentAdd from '../commentAdd/commentAdd';
import CommentList from '../commentList/commentList'
class App extends Component{
  render(){
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
          <CommentAdd/>
          <CommentList/>

        </div>
      </div>
    );
  }
}

export default App;
