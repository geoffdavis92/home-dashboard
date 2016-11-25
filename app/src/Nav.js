import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {
	constructor(props) {
		super()
	}
	render() {
		return (
			<nav>
				<Link to='/' className='btn-flat white-text'>Home</Link>
				<Link to='/resources' className='btn-flat white-text'>Resources</Link>
			</nav>
		)
	}
}