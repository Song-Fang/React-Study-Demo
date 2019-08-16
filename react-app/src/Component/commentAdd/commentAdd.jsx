import React,{Component} from 'react';
class CommentAdd extends Component {
  render(){
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>UserName</label>
            <input type="text" className="form-control" placeholder="username"/>
          </div>
          <div className="form-group">
            <label>Comment</label>
            <textarea className="form-control" rows="6" placeholder="content"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentAdd;
