"use strict";

// 1000 Lights
// -----------

/*
Problem:
--------
You have a bank of switches before you, numbered from 1 to n. Every switch 
is connected to exactly one light that is initially off. You walk down the 
row of switches and toggle every one of them. You walk back to the beginning 
of the row and start another pass. On this second pass, you toggle switches 
2, 4, 6, and so on. On the third pass, you go back to the beginning again, 
this time toggling switches 3, 6, 9, and so on. You continue to repeat this 
process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and 
returns an array of the lights that are on after n repetitions.

Input: Number (of switches)
Output: Array that shows how many lights are on after n reptitions
  - array of numbers of the specific switches that are on

Rules:
  - toggle every switch
    - then toggle every second switch
    - then every third switch and so on until you have completed n
    repetitions
  - return an array that shows how many lights are on after n
  repetitions

Mental Model:

loop n number of times. Then create another loop that will iterate over an
array of values representing switches. On each inner loop, the value by which
this loop increments will be based on n + 1. So for the first loop (0 + 1), we will
increment over the array 1 value at a time toggling every switch. On the next
loop, we will increment (1 + 1), every second element and so on. 

Examples:

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
  - All the lights start in the off position
// Round 1: all lights are on
  - iterate through array one value at a time and toggle switch
    - index 0: false => true
    - index 1: false => true
    - index 2: false => true
    - index 3: false => true
    - index 4: false => true
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
  - every second element
    - index 0: true
    - index 1: true => false
    - index 2: true
    - index 3: true => false
    - index 4: true
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
  - every third element
    - index 2: true => false
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
  - every 4th element
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
  - the last switch gets toggled


Data Structure:

Array of booleans
  - we can then return an array of all the indices that have a true
  value in that position

Algorithm:
Given 5:
- create an array of n elements all of which are false
  => new Array(5).fill(false) => [false, false, false, false , false]

- create a loop that iterates 5 times starting at 0
  - create another loop that will iterate over the array of switches
  - on the first iteration, we will toggle every switch
    - index 0 - index 4
  - 
*/

function lightsOn(switches) {
  let lights = new Array(switches).fill(false);

  for (let i = 0; i < switches; i += 1) {
    for (let j = i; j < switches; j += i + 1) {
      lights[j] = !lights[j];
    }
  }

  return lights.map((bool, idx) => {
    if (bool) return idx + 1;
    return bool;
  }).filter(el => el);
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]