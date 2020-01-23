import React from 'react';
import {render} from 'react-dom';
import App from './container/app.js';
import {store} from './redux/store.js';
import {Provider} from 'react-redux';

//pass reducers into createStore method


render(
  (
    <Provider store= {store}>
    <App/>
    </Provider>
  ),document.getElementById('root')
);
