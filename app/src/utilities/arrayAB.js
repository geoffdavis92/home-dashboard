// @flow
/**
 * @function
 * @name  arrayAB
 * @description Allows A/B access to an array's elements
 * @param  {Array<mixed>} array Array with elements to access
 * @param  {Function} callback  Function with an array with [a,b] elements, and the input array as arguments
 * @return {Function}                    [description]
 */
export default function arrayAB (array:Array<mixed>, callback:Function) {
	const _array = [];
	array.forEach(function(el,i,arr) {
		if (i !== arr.length - 1) {
			_array.push([el,arr[i+1]])
		} else {
			return callback(_array,arr)
		}
	})
}

export function toDiffArray (abArray:Array<mixed>,diffArray:Array<mixed>) {
	abArray.forEach((el) => {
		diffArray.push(el[0]-el[1]);
	})
	return diffArray
}