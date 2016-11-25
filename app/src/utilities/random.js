export function randomDates() {
	let a=[0,1,2,3,4];
	a.forEach(function(el,i,arr) {
		arr[i] = new Date((Math.ceil(Math.random() * 12))+'-'+(Math.ceil(Math.random() * 30))+'-2016')
	});
	return a;
}