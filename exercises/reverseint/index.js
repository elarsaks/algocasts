// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let reverse = n.toString().split('').reverse().join('');

	return n < 0
		? parseInt(reverse.slice(0, reverse.length)) * -1
		: parseInt(reverse);
}

module.exports = reverseInt;
