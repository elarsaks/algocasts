// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/*
function pyramid(n) {
	let spaces = '';
	let hashes = '';

	for(let i = 1; i <= n - 1; i++){
		spaces = spaces + ' '
	}

	for(let i = 1; i <= n ; i++){
	

		if(hashes.length < 1 ){
			hashes = hashes + '#'
		} else {
			hashes = hashes + '##'
			spaces = spaces.slice(0, spaces.length -1)
		}				
		console.log(spaces + hashes + spaces)
	}
} */

/* Produces 1 extra space!
function pyramid(n) {
	const midpoint = Math.floor((2 * n -1) / 2)

	for(let row = 0; row < n; row++){
		let level = '';

		for(let column = 0; column <= 2 * n - 1 ; column++){

			if(midpoint - row <= column && midpoint + row >= column){
				level += '#';
			} else {
				level += ' ';
			}
		}

		console.log(level)
	}
} 
*/ 

/*
function pyramid(n) {
	const midpoint = Math.floor((2 * n -1) / 2)

	for(let row = 0; row < n; row++){
		let level = '';

		for(let column = 0; column <= 2 * n - 2; column++){

			if(midpoint - row <= column && midpoint + row >= column){
				level += '#';
			} else {
				level += ' ';
			}
		}

		console.log(level)
	}
} */

/// BUILD Recursion 
//! IT IS NOT WORKING, BECAUSE IT NEVER RETURNS
function pyramid(n, row = 0, level = '') {
	if(row === n){
		return;
	}

	if(level.length === 2 * n - 1){
		console.log(level);
		return pyramid(n, row + 1);
	}

	const midpoint = Math.floor((2 * n -1) / 2)
	let add;

	if(midpoint - row <= level.length && midpoint + row >= level.length){
		add = '#'
	} else {
		add = ' '
	}

   pyramid(n, level + add)	 	
}


pyramid(1)
console.log('_______________')
pyramid(2)
console.log('_______________')
pyramid(3)


module.exports = pyramid;
