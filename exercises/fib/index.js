// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


/* Iterative
function fib(n) {
	var fib = [0, 1]

	for(var i = 0; i <= n; i++){
		
		fib.push(fib[i] + fib[i + 1])

		if(i === n ){
			return fib[i]
		}
	}
}
*/


/* Recursive
function fib(n, mem = [0, 1], count = 0) {
	mem.push(mem[0]+mem[1])
	mem.shift()

	return count === n -1 ? mem[0] : fib(n, mem, count + 1)
} */



/* Recursive insane, but slow 
function fib(n) {
	if(n < 2){
		return n
	}

	return fib(n-1) + fib(n-2)
} */ 

/*
function fib(n) {
	return n < 2 ? n :  fib(n-1) + fib(n-2)
} */


// Recursion with memoization
function memoize(fn){
	const cache = {}

	return function(...args){
		if(cache[args]){
			return cache[args]
		} 

		const result = fn.apply(this, args);
		cache[args] = result;

		return result;
	}
}

function slowFib(n) {
	if(n < 2){
		return n
	}

	return fib(n-1) + fib(n-2)
}

const fib = memoize(slowFib)

fib(5)


module.exports = fib;
