// React
import React, { Component } from 'react';
// Placeholder data
import { diagnostics } from './placeholder'
// CSS
import './css/components/Diagnostics.css';

class Diagnostics extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}
	render() {
		return (
			<p>Diagnostics Component</p>
		)
	}
}

export default Diagnostics;