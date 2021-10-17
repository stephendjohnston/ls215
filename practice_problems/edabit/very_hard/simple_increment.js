"use strict";

// Edabit > Very Hard > Not a Simple Increment

/*
Create a function that takes three integer parameters: a number n, number of iterations, and step. You have to implement an algorithm, which increases the given number as explained below:

n = 143726, iterations = 16, step = 3
simpleIncrement(n, iterations, step) ➞ 243826
Step 1: We start from the first digit and increment the 4th digit because the step is 3.

s - Starting Position
* - current increased position

Position: s - - - - - ➞ - - - * - -
Number:   1 4 3 7 2 6 ➞ 1 4 3 8 2 6
Step 2: Repeat step #1 with the updated starting position.

s - Starting Position
* - current increased position

Position: - - - s - - ➞ * - - - - -
Number:   1 4 3 8 2 6 ➞ 2 4 3 8 2 6
Remember, if the number overflows, the current position gets shifted to the right.
9 9 9 ➞ - - p   // before overflow position will be at 3rd digit
1 0 0 0 ➞ - - - p   // after overflow position will be at 4th digit

More examples on overflow:
9 ➞ 10
799 ➞ 800 (If you increased the second 9) or 809 (if you increased the first 9)
99000 ➞ 100000 (If you increased the second 9) or 109000 (if you increased the first 9)

Examples:

n = 143726, iterations = 16, step = 3
simpleIncrement(n, iterations, step) ➞ 243826

iteration 1:
Position: s - ➞ - - *
Number:   9 9 ➞ 1 0 0

iteration 2:
Position: - - s ➞ - - *
Number:   1 0 0 ➞ 1 0 1

iteration 3:
Position: - - s ➞ - - *
Number:   1 0 1 ➞ 1 0 2

iteration 4:
Position: - - s ➞ - - *
Number:   1 0 2 ➞ 1 0 3



[50, 10, 0, 150] . The step = 0 and the iteration = 10

The 1st iteration -> 60  // step 0 was 5
s - -> * -
5 0 -> 6 0

s - -> * -
6 0 -> 7 0

s - -> * -
7 0 -> 8 0

s - -> * -
8 0 -> 9 0

s - -> - * -
9 0 -> 1 0 0

s - - -> - * -
1 0 0 -> 1 1 0

s - - -> - * -
1 1 0 -> 1 2 0

s - - -> - * -
1 2 0 -> 1 3 0

s - - -> - * -
1 3 0 -> 1 4 0

s - - -> - * -
1 4 0 -> 1 5 0

The 2st iteration -> 70  // step 0 was 6
The 3rd ite...          ->  80
The 4th ite...          ->  90
The 5th ite..            -> 100 // step 0 is the first 0 now so start with the first 0
The 6th ite..          -> 110
The 7th ite..          -> 120
The 8th ite..          -> 130
The 9th ite..          -> 140
The 10th ite..          -> 150

console.log(simpleIncrement(1673, 4, 3)) -> 2784
iteration 1:
position: s - - - => - - - *
number:   1 6 7 3 => 1 6 7 4

starting index = 0
getting next position: step % number of digits: 0 + (3 % 4) = 3

iteration 2:
position: - - - s => - - * -
number:   1 6 7 4 => 1 6 8 4

starting index = 3
getting next position: step % number of digits: 3 + (3 % 4) = 6
since 6 is greater than the number of digits, we have to modulo 6 % number of digits: 6 % 4 = 2
above: 8 is at index 2

iteration 3:
position: - - s - => - * - -
number:   1 6 8 4 => 1 7 8 4

starting index = 2
getting next Position: 2 + (3 % 4) = 5
since 5 is greater than 4 (number of digits): 5 % 4 = 1
above: 7 is at index 1

iteration 4:
position: - s - - => * - - -
number:   1 7 8 4 => 2 7 8 4

simpleIncrement(1673, 2, 16) ➞ 3673

simpleIncrement(99, 99, 99) ➞ 198

simpleIncrement(99, 99, 98) ➞ 4734

PEDAC

inputs: Three Numbers
- first number is the number that will be incremented
- second number is the iterations or the number of times you will increment the first number
- third number is the digit position counter. It determines what digit you will increment on each iteration

outputs: Number
- the incremented Number from the input

Rules:
- Assume all inputs will be provided
- if iterations is 0, return the input n
- if the step is 0, the first digit of the number will always be incremented
- if the current digit that you increment is a 9, that digit will become a 0, but you will have to update the entire number which may increase the number of digits in the number. At the very least, it will increment the number to the left of the number that was previously incremented.

Mental Model:
Iterate equal to the input iterations argument. On each iteration, change the position of the digit to increment by moving from left to right along the digit by the step argument. If the step argument is greater than the 


Formula for getting next index is: 0 + (3 % 4) = 3
calculate the step % number of digits. Add the start index to this number. If this number is > the number of digits then modulo again:
index % number of digits

How to increment number from 9 to 0?

99 to 100?

if incrementing 9 to 0, have to check the number next to it if there is one. If there is no number, then have to add a 1. If there is another number, like 7 then increment to 8. If the number is 9, then change to 0 and then check if there is another number. Sort or recursive. 

Algorithm:
- split the number into an array of digits
- initialize poisition variable to 0
  - this variable is used to keep track of the position of which    digit to increment on each iteration
- create a for loop that begins at 0 and iterates up to the iterations argument
  - on each iteration:
    - set numberOfDigits to the length of the digits array
    - get the next position by using nextPosition function
    
    Inside nextPosition
      - get the remainder of step divided the number of digits
      - add the current position to this number
      - if the new position is greater than the number of digits, get the remainder of position % number of digits
      - return the new position
    
    - if the digit at the current position is === 9 then we need to update the that digit as well as the digit to the left of the current digit.
    
      Inside incrementDigits()
        - the first condition will only apply for the recursive application of this function as we know upon entering this function that the current digit will be 9.
        - since it is 9, incremnting it means setting the current digit to 0 and then either incrementing the digit to the left of the current digit, or unshifting 1 to the array of digits.
        - if there is no digit to the left of the current digit
          - unshift(1) and then return
        - if we get to the end of the function, this means there is a digit to the left of the current digit and we have to increment it so we recall incrementDigits with the same array and the position - 1.
        - if the digit at the previous position is < 9, then we can increment it by and return
        - if the digit is 9, then we will follow the same process as above until the current digit is less than 9, or we have reached the first digit in the array of digits
        
      - after the incrementDigits function call we need to determine if we added a 1 to the array of digits so that we can update the position variable
        - if the number of digits is greater than the previous number of digits, then add 1 to the position
    - if the current digit is less than 9, then we can just add one to the current digit
- join the array of digits and then convert to a number and return this number
*/

// First Iteration

function simpleIncrement(n, iterations, step) {
  let numArray = [...String(n)].map(Number);
  let index = 0;
  
  for (let i = 0; i < iterations; i += 1) {
    let numberOfDigits = numArray.length;
    index = calculateNextIndex(index, step, numberOfDigits);
    
    if (numArray[index] === 9) {
      recalculateNumber(numArray, index);
      if (numArray.length > numberOfDigits) {
        index += 1;
      }
    } else {
      numArray[index] += 1;
    }
  }
  
  return Number(numArray.join(''));
}

function recalculateNumber(array, index) {
  if (array[index] < 9) {
    array[index] += 1;
    return array;
  }
  
  array[index] = (array[index] + 1) % 10;
  
  if (array[index - 1] === undefined && array[index] === 0) {
    array.unshift(1);
    return array;
  } else if (array[index - 1] === undefined && array[index] < 9) {
    return array;
  }
  
  return recalculateNumber(array, index - 1);
}

function calculateNextIndex(index, step, numberLength) {
  index = index + (step % numberLength);
  
  if (index >= numberLength) {
    index %= numberLength;
  }
  
  return index;
}

// Refactored Code

function simpleIncrement(n, iterations, step) {
  let digits = [...String(n)].map(Number);
  let position = 0;
  
  for (let i = 0; i < iterations; i += 1) {
    let numberOfDigits = digits.length;
    position = nextPosition(position, step, numberOfDigits);
    
    if (digits[position] === 9) {
      incrementDigits(digits, position);      // mutates digits array
      if (digits.length > numberOfDigits) {
        position += 1;
      }
    } else {
      digits[position] += 1;    // mutates digits array
    }
  }
  
  return Number(digits.join(''));
}

function incrementDigits(array, position) {
  if (array[position] < 9) {
    array[position] += 1;
    return;
  }
  
  array[position] = 0;
  
  if (array[position - 1] === undefined) {
    array.unshift(1);
    return;
  }

  return incrementDigits(array, position - 1);
}

function nextPosition(position, step, digitCount) {
  position = position + (step % digitCount);
  
  if (position >= digitCount) {
    position %= digitCount;
  }
  
  return position;
}

console.log(simpleIncrement(1673, 2, 16))     // ➞ 3673
console.log(simpleIncrement(99, 99, 99))      // ➞ 198
console.log(simpleIncrement(99, 99, 98))      // ➞ 4734
console.log(simpleIncrement(5, 156, 15))      // ➞ 20996
console.log(simpleIncrement(1, 1, 1))         // ➞ 2
console.log(simpleIncrement(1, 10, 1))        // ➞ 20
console.log(simpleIncrement(1, 10, 10))       // ➞ 11
console.log(simpleIncrement(50, 10, 0))       // ➞ 150
console.log(simpleIncrement(123, 123, 123))   // ➞ 300090
console.log(simpleIncrement(12523, 122, 433)) // ➞ 6535854
console.log(simpleIncrement(9, 9000, 100))    // ➞ 1854892466545716