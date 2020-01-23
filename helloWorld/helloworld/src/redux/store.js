import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {counter} from './reducers';

export const store = createStore(counter,applyMiddleware(thunk));
