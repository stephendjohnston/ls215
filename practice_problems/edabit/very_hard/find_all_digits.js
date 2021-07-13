"use strict";

// Find All Digits
// ---------------

/*
Taking each four digit number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".

Examples:

findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057
// digits found:  517-  4-38  29-6  -0

findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) ➞ 3370
// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0

findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) ➞ "Missing digits!"
// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// 0 and 1 are missing

Notes:

- The digits can be discovered in any order.

PEDAC

Inputs: Array of numbers
Outputs: Number

Rules:
- discover all digits from 0-9
- the digits can be discovered in any order
- when the last digit from 0-9 is discovered return the number
in which the last digit was discovered
- if not all the digits are discovered then return the string
'Missing Digits!'

Examples:
findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057
// digits found:  517-  4-38  29-6  -0

Mental Model:
Iterate the number of times equal to the length of the input array.
Create a main array that will hold the numbers discovered. create a variable the will hold the current number that is being iterated over.
Iterate over each number in the array as a string. If the main array includes the current digit in a number, continue to the next digit.
If the it does not, add that digit to the main array. After iterating through each number, check to see if the main array has
all of the digits. if it does, return the current number, if it does not continue on to the next number. If all numbers in the array have been checked and not all numbers have been discovered, return the string 'Missing Digits?'

Algorithm:

- create discovered array that will hold the numbers discovered
- create a loop that will loop the number of times equal to the input array length
  - create a variable that will hold the current number to be iterated over
  - create a for looop that will iterate over each digit of the number
    - if discovered includes current digit, continue
    - if it doesnt, push that digit to discovered
  - after each number has been iterated over
    - check to see if discovered length === 10
    - it equal to 10, return current number
- return 'Missing Digits!'

*/

function findAllDigits(array) {
  const discovered = [];
  
  for (let i = 0; i < array.length; i += 1) {
    let currentNumber = String(array[i]);
    
    for (let j = 0; j < currentNumber.length; j += 1) {
      if (discovered.includes(currentNumber[j])) {
        continue; 
      }
      
      discovered.push(currentNumber[j]);
    }
    
    if (discovered.length === 10) return Number(currentNumber);
  }
  
  return 'Missing digits!';
} 

console.log(findAllDigits([3129, 7689, 7449, 4389, 5855, 9670, 9245, 1291, 7367, 1810]) === 9670)
console.log(findAllDigits([2758, 3737, 3349, 5118, 7004, 6106, 8868, 6687, 2510, 8911]) === 6106)
console.log(findAllDigits([5343, 6743, 2922, 2423, 7050, 5116, 3992, 2707, 2435, 5251]) === "Missing digits!")
console.log(findAllDigits([4169, 4511, 1498, 6945, 7959, 2666, 7872, 3217, 5408, 8662]) === 5408)
console.log(findAllDigits([7985, 7130, 4625, 7392, 4933, 7163, 7130, 2145, 1596, 6188]) === 4625)
console.log(findAllDigits([4823, 1049, 9555, 9466, 2191, 9316, 1105, 4489, 8318, 7081]) === 7081)
console.log(findAllDigits([3914, 9923, 8187, 1657, 4271, 9538, 3759, 4543, 3438, 1943]) === "Missing digits!")