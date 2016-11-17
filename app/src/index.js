import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './Dashboard';
import MobileMenu from './MobileMenu';

import './css/critical.css';

ReactDOM.render(
  <Dashboard />,
  document.getElementById('root')
);

ReactDOM.render(
	<MobileMenu />,
	document.getElementById('mobile-menu')
);
