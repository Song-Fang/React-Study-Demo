import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import App from './component/app';
import {counter} from './redux/reducers'

const store = createStore(counter);
//function counter has been invoked

function myRender(){
  render(<App store={store}/>,document.getElementById("root"));
}
//intialize render page
myRender();

//listen and re-render the page
store.subscribe(myRender);
