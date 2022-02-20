// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	let hashes = ''
	let spaces = ''

	for (var i = 0; i<n; i++) {
			spaces = spaces + ' ';
	}

	for (var i = 0; i<n; i++) {
			hashes = hashes + '#';
			spaces = spaces.slice(0, spaces.length - 1)

			console.log(hashes + spaces)
	}
} 


/* FREAKING INFINITE LOOP
function steps(n, row = 0, stair = '') {


	if (n === row){
		return ; 
	}

	if(n === stair.lenth){
		console.log(stair)
		steps(n, row + 1);
		return ;
	}


	if(stair.length <= row){
		stair += '#'
	} else {
		stair += ' '
	}

	 steps(n, row, stair)
} */ 


steps(5)

module.exports = steps;
