/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
 
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();


  const reversedStr = cleanedStr.split('').reverse().join('');


  return cleanedStr === reversedStr;
}

const inputString1 = "Watermelon";
console.log(`Is "${inputString1}" a palindrome? ${isPalindrome(inputString1)}`);

const inputString2 = "Refer";
console.log(`Is "${inputString2}" a palindrome? ${isPalindrome(inputString2)}`);

module.exports = isPalindrome;
