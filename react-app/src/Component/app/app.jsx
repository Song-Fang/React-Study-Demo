import React,{Component} from 'react';
import CommentAdd from '../commentAdd/commentAdd';
import CommentList from '../commentList/commentList'
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      comments:[
        {name:'Jackie',
         comment:'React is pretty good!'
        },
        {name:'Lynn',
         comment:'React is hard to learn!'}
      ]
    }
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
          <CommentAdd/>
          <CommentList comments = {comments} />

        </div>
      </div>
    );
  }
}

export default App;
