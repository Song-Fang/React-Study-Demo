import {ADD_COMMENT,DELETE_COMMENT} from './action-types.js';

export const handleComments =(comments)=>({
  type:ADD_COMMENT,
  data:comments
});

export const deleteComments = (comments)=>({
  type:DELETE_COMMENT,
  data:comments
})
