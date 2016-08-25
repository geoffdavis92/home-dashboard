import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import MobileMenu from './MobileMenu';

import './css/critical.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
	<MobileMenu />,
	document.getElementById('mobile-menu')
);
