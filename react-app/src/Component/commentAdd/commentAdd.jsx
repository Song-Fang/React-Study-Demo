import React,{Component} from 'react';
import PropTypes from 'prop-types';
class CommentAdd extends Component {

  static propTypes={
    addComments:PropTypes.func.isRequired
  }

  state={
    username:"",
    content:""
  }



  handleSubmit=()=>{
    //package the object of comment

    const comment = {
      name:this.state.username,
      comment:this.state.content
    };
    
    this.props.addComments(comment);
    this.setState({
      username:'',
      content:''
    }
    );
  }

  handleUserName=(event)=>{
    const username = event.target.value;
    this.setState({username});

  }

  handleContent=(event)=>{
    const content = event.target.value;
    this.setState({content});
  }

  render(){
    const {username} = this.state;
    const {content} = this.state;
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>UserName</label>
            <input type="text" className="form-control" placeholder="username" value={username} onChange={this.handleUserName}/>
          </div>
          <div className="form-group">
            <label>Comment</label>
            <textarea className="form-control" rows="6" placeholder="content" value={content} onChange = {this.handleContent}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentAdd;
