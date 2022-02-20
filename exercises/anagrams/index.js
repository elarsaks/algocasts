// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* 
Solution 1.
function anagrams(stringA, stringB) {
	function filter(string) {
		return string
			.toLowerCase()
			.split('')
			.filter((char) => /[a-z]/.test(char));
	}

	function countChars(charArray) {
		let count = {};

		charArray.forEach((char) =>
			!count[char] ? (count[char] = 1) : (count[char] = count[char] + 1)
		);

		return count;
	}

	function compare(objA, objB) {
		let response = true;
		let longestObj = objA.length > objB.length ? objA : objB;

		for (const [key, value] of Object.entries(longestObj)) {
			if (!(objA[key] === objB[key])) {
				response = false;
			}
		}

		return response;
	}

	let countA = countChars(filter(stringA));
	let countB = countChars(filter(stringB));

	return compare(countA, countB);
} */

/* 
Solution 2.

function anagrams(stringA, stringB) {
	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);

	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}

	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}

	return true;
}

function buildCharMap(str) {
	const charMap = {};

	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}

	return charMap;
} 
*/

function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
	return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
