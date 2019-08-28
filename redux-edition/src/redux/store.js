import {createStore} from 'redux';
import {counter} from './reducers'
//function counter has been invoked
const store = createStore(counter);

export default store;
