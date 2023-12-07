/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const newStr1 = str1.replace(/\s/g, '').toLowerCase();
  const newstr2 = str2.replace(/\s/g, '').toLowerCase();
  
  if(
    newStr1.length !== newstr2.length) {
      return false;
    }

    const newStr1sorted = newStr1.split('').sort().join('');
    const newStr2sorted = newstr2.split('').sort().join('');

    return newStr1sorted == newStr2sorted;
}

 const output1 = isAnagram ("Hello", "silent");
 console.log(output1);

 const output2 = isAnagram ("Pat", "tap");
 console.log(output2);

module.exports = isAnagram;
