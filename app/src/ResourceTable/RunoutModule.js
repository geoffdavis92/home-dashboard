// Libraries
import React, { Component } from 'react'
import DateSetAnalytics, { getEstimatedDiff } from '../analytics/Dates'

export default class Runout extends Component {
	constructor() {
		super()
	}
	componentDidMount() {}
	render() {
		if (this.props.dateSet.length > 0) {
			const durations = new DateSetAnalytics(this.props.dateSet);
			durations.sort();
			durations.reduce();
			console.log(durations)
			return (<p>{durations.averageDiff}</p>)
		} else {
			return (
				<span>Not enough data to calculate</span>
			)
		}
	}
}