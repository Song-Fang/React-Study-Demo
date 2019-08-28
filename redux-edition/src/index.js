import React from 'react';
import {render} from 'react-dom';
import App from './component/app';
import store from './redux/store';

function myRender(){
  render(<App store={store}/>,document.getElementById("root"));
}
//intialize render page
myRender();

//listen and re-render the page
store.subscribe(myRender);
