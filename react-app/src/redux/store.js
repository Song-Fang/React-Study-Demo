import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import comments from './reducers';

const store = createStore(comments,applyMiddleware(thunk));

export default store;
