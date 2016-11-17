import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './Dashboard';
import MobileMenu from './MobileMenu';

import Dates from './analytics/Dates';

import './css/critical.css';

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {output:''}
	}
	componentDidMount() {
		const test = new Dates(new Date('11/17/2016'),new Date('05/12/1992'))
		console.log(test.diff())
	}
	render() {
		return(
			<pre>
				{this.state.output}
			</pre>
		)
	}
}

ReactDOM.render(
  <Test />,
  document.getElementById('root')
);

ReactDOM.render(
	<MobileMenu />,
	document.getElementById('mobile-menu')
);
