/**
 * @function
 * @name randomDates
 * @return {[type]} [description]
 */
export function randomDates() {
	const array = [];
	for (let i=0;i<5;i++) {
		array.push(new Date((Math.ceil(Math.random() * 12)+1)+'-'+(Math.ceil(Math.random() * 30))+'-2016'))
	}
	return array;
}