"use strict";

// Is My Friend Cheating
// ---------------------

/*
- A friend of mine takes the sequence of all numbers from 1 to n 
(where n > 0).
- Within that sequence, he chooses two numbers, a and b.
- He says that the product of a and b should be equal to the sum of all 
numbers in the sequence, excluding a and b.
- Given a number n, could you tell me the numbers he excluded from the sequence?

The function takes the parameter: n (n is always strictly greater than 0) 
and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in 
increasing order of the "a".

It happens that there are several possible (a, b). The function returns an 
empty array (or an empty string) if no possible numbers are found which will 
prove that my friend has not told the truth! (Go: in this case return nil).

Examples:
removNb(26) should return [(15, 21), (21, 15)]

or
removNb(26) should return { {15, 21}, {21, 15} }
or
removeNb(26) should return [[15, 21], [21, 15]]
or
removNb(26) should return [ {15, 21}, {21, 15} ]
or
removNb(26) should return "15 21, 21 15"


PEDAC
-----

inputs: Number 'n'
- will always be greater than 0
outputs: Array of arrays
- subarrays will contain two numbers

Rules:
- n is always greater than 0
- two numbers are chosen from 1-n (a and b)
- product of a and b should be equal to the sum of the rest of the numbers
from 1-n excluding a and b
- there could be more than 1 solution for a and b

Mental Model:
create an array of numbers from 1 up to n. Get the sum of all the numbers
in that array. Create a for loop that will iterate over all of the numbers
in the array. Set the firstNum to the first number which will be 1. Create
another for loop that will iterate over all of the numbers in the array
starting at the first index. On each iteration, subtract firstNum and currentNum
from the sum of the array, and check if firstNum * currentNum === the new sum.
If they are equal, add these to numbers to a subarray and add this array to
a result array. 

Algorithm:
- create a result array
- create an array of numbers from 1 up to n using a for loop
- get the sum of the array of numbers using reduce
- create a for loop that will iterate from the first number in the array
up to the last number
  - create a subarray
  - set the first number in the array to firstNum
    - create a for loop that will iterate from the start of the array to the end
      - on each iteration, set currentNum to the current j index of the array
      of numbers
      - subtract firstNum and currentNum from the sum of the array
      - if firstNum * currentNum === subtracted sum
        - add firstNum and currentNum to result array as elements in an array
  - return result array

  **Solution is to slow with high numbers for codewars
*/

function removeNb (n) {
  const result = [];
  const numArray = new Array(n).fill(0).map((_, i) => i + 1);
  let arrSum = numArray.reduce((acc, num) => acc + num);

  for (let i = 0; i < numArray.length; i += 1) {
    let a = numArray[i];

    for (let j = 0; j < numArray[j]; j += 1) {
      let b = numArray[j];
      if (a * b === arrSum - a - b) {
        result.push([a, b]);
      }
    }
  }

  return result;
}

console.log(removeNb(26))// [[15,21], [21,15]]
console.log(removeNb(100))// []
console.log(removeNb(78))// [[45, 66], [66, 45]]
