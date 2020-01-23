import {INCREMENT,DECREMENT} from './action-types.js';

export const increment = (number)=>({type:INCREMENT,data:number});
export const decrement = (number)=>({type:DECREMENT,data:number});

//return a function and the parameter is also a function
export const asyncIncrement = (number)=>(dispatch=>{
  setTimeout(()=>{
    dispatch(increment(number))},3000);
});
