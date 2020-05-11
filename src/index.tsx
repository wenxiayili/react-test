import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, } from 'react-router-dom';

import App from './routers/routers';


import './scripts/rem';

import './styles/reset.css';
import './styles/init.scss';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
