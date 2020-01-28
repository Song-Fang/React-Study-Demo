import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENTS} from './action-types.js';

export const handleComments =(comments)=>({
  type:ADD_COMMENT,
  data:comments
});

export const deleteComments = (comments)=>({
  type:DELETE_COMMENT,
  data:comments
})

const receiveComments = (comments)=>({
  type:RECEIVE_COMMENTS,
  data:comments
})

export const getComments = ()=>(
  dispatch=>{
    setTimeout(
      ()=>{
        const comments = [{name:'ZhangSan',comment:'I love Lynn'},{name:'Lynn',comment:'I love Francis'}]
        dispatch(receiveComments(comments));
      }
      ,3000);
  }
)
