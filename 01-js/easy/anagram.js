/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const string1 = str1.replace(/\s/g, '').toLowerCase();
  const string2 = str2.replace(/\s/g, '').toLowerCase();

  if(string1.length !== string2.length){
    return false
  }

  const sortedstring1 = string1.split('').sort().join('');
  const sortedstring2 = string2.split('').sort().join('');

  return sortedstring1 == sortedstring2;
  
}

const anagram1 = isAnagram("hello", "world");
console.log(anagram1);

const anagram2 = isAnagram("Silent", "Listen");
console.log(anagram2);

  

module.exports = isAnagram;
