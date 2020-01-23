import {createStore,applyMiddleware} from 'redux';
import {comments} from './reducers';
import thunk from 'redux-thunk';

export const store =createStore(comments,applyMiddleware(thunk));
