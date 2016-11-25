// @flow
/**
 * @author Geoff Davis <geoffdavis92@gmail.com>
 * @name params
 * @description Get URL parameters
 * @return {Object} Key/value pairs of URL parameters
 */
// export function params(paramString='') {
//     var p = paramString !== '' ? window.location.search : paramString 
//     	q = p.split('?')[1].split('&'),
//         o = {};
//     for (k in q) {
//         o[q[k].split('=')[0]] = decodeURIComponent(q[k].split('=')[1].replace(/\+/g,' '));
//     }
//     return o;
// }

export default class Params {
	params: string|Object;
	type: string;
	constructor(params:string|Object) {
		this.params = params;
		this.type = typeof params;
	}
	parse() {
		if (this.type === 'string') {
			let queryString:string = this.params.split('?')[1].split('&'),
				parsedParams = {};
			for (let key in queryString) {
				parsedParams[queryString[key].split('=')[0]] = decodeURIComponent(queryString[key].split('=')[1].replace(/\+/g,' '));
			}
			return parsedParams;
		} else {
			throw 'Cannot use parse() method on an Object.'
		}
	}
	setup() {
		if (this.type === 'object') {
			let queryString = '?'
			for (let key in this.params) {
				queryString += `${key}=${this.params[key]}&`
			}
			return queryString.replace(/\&$/,'');
		} else {
			throw 'Cannot use setup() method on a String.'
		}
	}
}