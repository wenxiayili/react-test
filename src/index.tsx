import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, } from 'react-router-dom';

import App from './routers/renderRouters';
import {Provider} from 'reto';
import LoginStore from './stores/login';


import './scripts/rem';

import './styles/reset.css';
import './styles/init.scss';

ReactDOM.render(
  <Provider of={LoginStore}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
