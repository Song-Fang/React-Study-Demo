import {Handle_Comments,Delete_Comments} from './action-types';

export const handleComments = (comment)=>({type:Handle_Comments,data:comment});

export const deleteComments = (index)=>({type:Delete_Comments,data:index});
