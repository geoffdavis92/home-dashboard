// @flow
export default class Dates {
	A: Date;
	B: Date;
	max: Date;
	min: Date;
	oneDay: number;
	constructor(dateA:Date,dateB:Date) {
		this.A = dateA
		this.B = dateB
		this.max = (this.A - this.B) > 0 ? this.A : this.B
		this.min = (this.A - this.B) < 0 ? this.A : this.B
		this.oneDay = 1000*60*60*24 // ms*sec*min*hr
	}
	diff() {
		// help from http://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates-using-javascript
		const days:number = Math.ceil(Math.abs(this.max-this.min) / this.oneDay),
			  years:number = parseFloat((days/365).toString().substr(0,5)),
			  months:number = parseFloat(((Math.ceil(Math.abs(this.max-this.min) / this.oneDay) / 365) * 12).toString().substr(0,6)),
			  weeks:number = parseFloat(((Math.ceil(Math.abs(this.max-this.min) / this.oneDay) / 365) * 52).toString().substr(0,7))
		return {
			days,
			weeks,
			months,
			years
		}
	}
	echo() {
		const _=this;
		return {
			a: _.A,
			b: _.B
		}
	}
}