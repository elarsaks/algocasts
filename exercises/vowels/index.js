// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/*
function vowels(str) {
	let vowels = /[aeiou]/gi;
  	let result = str.match(vowels) ? str.match(vowels) : '';
  	let count = result.length;

  return count
}
*/

/*
function vowels(str) {
	let count = 0;

	const checker = ["a", "e", "i", "o", "u"]

	for(let char of str.toLowerCase()){
		if(checker.includes(char)){
			count++;
		}
	}

	return count;
} */


function vowels(str) {
  	return str.match(/[aeiou]/gi) 
  		? str.match(/[aeiou]/gi).length 
  		: 0
}
module.exports = vowels;

vowels('Hi There!') 
vowels('Why do you ask?') 
vowels('Why?') 