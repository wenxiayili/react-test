import React from 'react';
import ReactDOM from 'react-dom';

import { Simple } from './pages/example/simple';

import './scripts/rem';

import './styles/reset.css';
import './styles/init.scss';

ReactDOM.render(
  <Simple />,
  document.getElementById('app'),
);
