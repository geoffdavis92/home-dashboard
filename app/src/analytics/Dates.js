// @flow
import arrayAB, { toDiffArray } from '../utilities/arrayAB'

window.arrayAB = arrayAB;
/**
 * @class Analyzes a dataset of Dates
 * @name DateSetAnalytics
 * @author Geoff Davis <geoffdavis92@gmail.com>
 */
export default class DateSetAnalytics {
	dateSet: Array<Date>;
	sortedSet: Array<Date>;
	averageDiff: number;
	/**
	 * @function
	 * @description Class constructor
	 * @param  {Array<Date>} dateSet [description]
	 * @return {null}
	 */
	constructor(dateSet:Array<Date>) {
		this.dateSet = dateSet;
		this.sortedSet = [];
		this.averageDiff;
	}
	/**
	 * @method sort
	 * @description Sorts DateSet, defaults to descending (newest first)
	 * @param {string} dir Direction of sort (defaults to desc[ending])
	 * @return {Array<Date>} Sorted Array of Date elements
	 */
	sort(dir:string='desc') {
		if (dir === 'desc') {
			this.sortedSet = this.dateSet.sort((a,b) => b - a)
		} else {
			this.sortedSet = this.dateSet.sort((a,b) => a - b)
		}
		return this.sortedSet
	}
	/**
	 * @method reduce
	 * @return {[type]} [description]
	 */
	reduce() {
		try {
			const diffArr = [];
			console.log(this.sortedSet)
			arrayAB(this.sortedSet,(abSet) => {
				toDiffArray(abSet,diffArr)
			});
			return this.averageDiff = msToDays((diffArr.reduce((curr,next) => curr + next) / diffArr.length))
		} catch(e) {
			throw {
				error: 'Calling reduce() before sort()',
				systemMessage: e
			};
		}
	}
}

export function msToDays(milliseconds) {
	return (milliseconds / 1000 / 60 / 60 / 24)
}

export function getEstimatedDiff(startDate:Date,averageDuration:number) {
	return (msToDays(startDate.getTime()) + averageDuration)
}