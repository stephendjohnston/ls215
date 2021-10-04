"use strict";

// Edabit > Hard > Reorder Digits

/*
Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or descending (desc) order.

Examples:

reorderDigits([515, 341, 98, 44, 211], "asc") ➞ [155, 134, 89, 44, 112]

reorderDigits([515, 341, 98, 44, 211], "desc") ➞ [551, 431, 98, 44, 211]

reorderDigits([63251, 78221], "asc") ➞ [12356, 12278]

reorderDigits([63251, 78221], "desc") ➞ [65321, 87221]

reorderDigits([1, 2, 3, 4], "asc")  ➞ [1, 2, 3, 4]

reorderDigits([1, 2, 3, 4], "desc") ➞ [1, 2, 3, 4]

Notes:

- Single-digit numbers should be ordered the same regardless of direction.
- Numbers in the array should be kept the same order.

inputs: Array, String
- Array contains positive integers
- will there ever be negatives?
- the string will determine the order that the digits are sorted
  - 'asc' or 'desc'
  
outputs: Array
- contains numbers from the input with digits of each number sorted according to the input string
- the numbers should stay in the same order as they were given in the input

Rules:
- Numbers in the result array should be kept in the same order as they appeared in the input array
- the digits of each number are sorted according to the input string
- single digit numbers stay the same

Examples:
reorderDigits([515, 341, 98, 44, 211], "asc") ➞ [155, 134, 89, 44, 112]
Input string === 'asc' meaning digits will be sorted from lowest to highest
- 515 becomes 155
- 341 -> 134
- 98 -> 89
etc

reorderDigits([515, 341, 98, 44, 211], "desc") ➞ [551, 431, 98, 44, 211]
Input String === 'desc' meaning digits will be sorted from highest to lowest
- 515 -> 551
- 341 -> 431
- 98 -> 98
etc

Mental Model:
Map over the input array and for each number, convert the number to a string, split the string into an array of digits. Sort this array into the order according to the input string. Join this sorted array back into a string number, and then convert back to Number. Return this array of numbers that have their digits sorted.

Data Structure:
Array
  - input and output are arrays
  - used to iterate over each number
  - used to iterate over each digit of a number
String
  - Convert each number to a string, so that we can split it into an array of digits.
Number
  - the final elements of return array will be numbers
  
Algorithm:
- map over the array of numbers
  - for each number, convert to a string
  - split the string number into a array of digits
  - sort this array of digits
    - if the input string === 'asc' sort by a - b
    - if the input string === 'desc' sort by b - a
      - instead of subtracting a - b or b - a, use localeCompare
    - join this sorted array into a string
    - convert back to a number and return this number to map method
- return the map method

*/

function reorderDigits(arr, direction) {
  return arr.map(num => {
    let sortedNum = [...String(num)].sort((a, b) => {
      if (direction === 'asc') {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });
    
    return Number(sortedNum.join(''));
  });
}

console.log(reorderDigits([515, 341, 98, 44, 211], 'asc'))// [155, 134, 89, 44, 112])
console.log(reorderDigits([515, 341, 98, 44, 211], 'desc'))// [551, 431, 98, 44, 211])
console.log(reorderDigits([63251, 78221], 'asc'))// [12356, 12278])
console.log(reorderDigits([63251, 78221], 'desc'))// [65321, 87221])
console.log(reorderDigits([1, 2, 3, 4], 'asc'))// [1, 2, 3, 4])
console.log(reorderDigits([1, 2, 3, 4], 'desc'))// [1, 2, 3, 4])
console.log(reorderDigits([12, 21, 15, 51], 'asc'))// [12, 12, 15, 15])
console.log(reorderDigits([12, 21, 15, 51], 'desc'))// [21, 21, 51, 51])