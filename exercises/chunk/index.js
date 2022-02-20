// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/*
function chunk(array, size) {
	let chunked = [];

	array.forEach(e => {
		let lastChunk = chunked[chunked.length - 1]
		if(lastChunk && lastChunk.length < size ){
			chunked[chunked.length - 1].push(e)
		} else {
			chunked.push([e])
		} 
	})

	return chunked
}
*/

function chunk(array, size) {
	let chunked = [];
	let index = 0

	while (index < array.length){
		chunked.push(array.slice(index, index + size))
		index = index + size
	}

	

	return chunked
}


console.log(chunk([1, 2, 3, 4, 5], 1));

module.exports = chunk;
