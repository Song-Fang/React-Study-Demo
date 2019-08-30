import {Handle_Comments,Delete_Comments} from './action-types';
const initialComments = [
]

export default function comments(state=initialComments,actions){
  switch(actions.type){
    case Handle_Comments:
      return [actions.data,...state];
    case Delete_Comments:
      return state.filter((comment,index)=>index!==actions.data);
    default:
      return state;

  }
}
