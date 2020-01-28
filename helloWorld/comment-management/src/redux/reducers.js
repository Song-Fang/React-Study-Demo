import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENTS} from './action-types.js';
import {combineReducers} from 'redux';

const initComments = [];
function comments(state=initComments,action){
  switch(action.type){
    case ADD_COMMENT:
      return [action.data,...state];

    case DELETE_COMMENT:
      return state.filter((comment,index)=>index!==action.data);

    case RECEIVE_COMMENTS:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({comments});
