// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/* 
Solution 1
function capitalize(str) {
	return str
		.split(' ')
		.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
		.join(' ');
} */

/* Solution 2 */
function capitalize(str) {
	let result = ''
	for (char in str) {
		if(str[char - 1 ] === ' ' || char == 0){
			result = result + str[char].toUpperCase()
		} else {
			result = result + str[char]
		}
	}

	return result;
}

console.log(capitalize('a short sentence'));
module.exports = capitalize;
