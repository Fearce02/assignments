/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let BiggestElement = numbers[0];
    for( i = 0; i < numbers.length; i++){
        if(numbers[i] > BiggestElement){
            BiggestElement = numbers[i];
        }
    }

    return BiggestElement;

    
}

const numbersArray = [1, 10, 36, 48, 52, 2, 3];
const LargestElement = findLargestElement(numbersArray);
console.log(LargestElement);


module.exports = findLargestElement;