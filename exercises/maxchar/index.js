// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let map = {};
	let max = 0;
	let maxChar = '';

	//! for (let char of str) { <-- OF is used to loop strings
	//! for (let char in str) { <-- IN is used to loop strings
	str.split('').forEach((char) => {
		map[char] === undefined ? (map[char] = 1) : map[char]++;
	});

	Object.keys(map).forEach((key) => {
		if (map[key] > max) {
			max = map[key];
			maxChar = key;
		}
	});

	return maxChar;
}

maxChar('abcccccccd');
module.exports = maxChar;
