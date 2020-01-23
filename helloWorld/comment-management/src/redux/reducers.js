import {ADD_COMMENT,DELETE_COMMENT} from './action-types.js';

export const initComments = [{name:'ZhangSan',comment:'I love Lynn'},{name:'Lynn',comment:'I love Francis'}];
export function comments(state=initComments,action){
  switch(action.type){
    case ADD_COMMENT:
      return [action.data,...state];
      //state.unshift(action.data);
      //return state;
    case DELETE_COMMENT:
      //state.splice(action.data);
      //return state;
      return state.filter((comment,index)=>index!==action.data));
    default:

  }
}
