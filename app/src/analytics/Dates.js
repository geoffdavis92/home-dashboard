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
			const diffArr = []
			/*this.reducedValue = this.sortedSet.reduce((curr:number|Date,next:Date) => {
				if (typeof curr === 'object') {
					return curr.getTime() + next.getTime();
				} else {
					return curr + next.getTime();
				}
			})
			return this.reducedValue*/
			arrayAB(this.sortedSet,(abSet) => {
				toDiffArray(abSet,diffArr)
			});
			// let reducedValue = (diffArr.reduce((curr,next) => curr + next) / diffArr.length)
			return this.averageDiff = ((diffArr.reduce((curr,next) => curr + next) / diffArr.length) / 1000 / 60 / 60 / 24)
		} catch(e) {
			throw {
				error: 'Calling reduce() before sort()',
				systemMessage: e
			};
		}
	}
}

export class DateDiff {}