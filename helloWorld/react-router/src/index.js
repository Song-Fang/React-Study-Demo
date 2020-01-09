import React from 'react';
import {render} from 'react-dom';
import App from './component/app';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
render(
  (<BrowserRouter>
    <App/>
  </BrowserRouter>),document.getElementById('root'));
