"use strict";

// Edabit > Hard > A Watermelon

/*
Mubashir is eating a watermelon.

He spits out all watermelon seeds if seeds are more than five.
He can swallow all watermelon seeds if seeds are less than or equal to five.
He can eat 1/4 of a watermelon each time.
Given a 2D array of watermelon where 0 is representing juicy watermelon while 1 is representing seed, return total number of seeds spit-out. See below example for detailed explanation :

Given a watermelon:

1, 0, 0, 1, 1, 1, 0, 1
1, 0, 1, 0, 1, 1, 0, 0
1, 1, 1, 1, 0, 0, 0, 0
0, 1, 0, 1, 1, 1, 1, 0
0, 0, 0, 1, 0, 1, 0, 0
1, 1, 1, 0, 0, 0, 1, 1
1, 0, 1, 1, 0, 0, 0, 0
0, 0, 0, 0, 0, 0, 0, 0

seeds = 0
total seeds = 0
Mubashir eats 1/4 piece (4x4 matrix) of watermelon :

x, x, x, x, 1, 1, 0, 1
x, x, x, x, 1, 1, 0, 0
x, x, x, x, 0, 0, 0, 0
x, x, x, x, 1, 1, 1, 0
0, 0, 0, 1, 0, 1, 0, 0
1, 1, 1, 0, 0, 0, 1, 1
1, 0, 1, 1, 0, 0, 0, 0
0, 0, 0, 0, 0, 0, 0, 0

seeds = 10
total seeds = 10 (All seeds were spit-out)
Mubashir eats next 1/4 piece (4x4 matrix) of watermelon :

x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
0, 0, 0, 1, 0, 1, 0, 0
1, 1, 1, 0, 0, 0, 1, 1
1, 0, 1, 1, 0, 0, 0, 0
0, 0, 0, 0, 0, 0, 0, 0

seeds = 8
total seeds = 10+8 = 18 (All seeds were spit-out)
Mubashir eats next 1/4 piece (4x4 matrix) of watermelon :

x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, 0, 1, 0, 0
x, x, x, x, 0, 0, 1, 1
x, x, x, x, 0, 0, 0, 0
x, x, x, x, 0, 0, 0, 0

seeds = 7
total seeds = 18+7 = 25 (All seeds were spit-out)
Mubashir eats last 1/4 piece (4x4 matrix) of watermelon :

x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x
x, x, x, x, x, x, x, x

seeds = 3
total seeds = 25+0 = 25
Examples
totalSeeds(watermelon) ➞ 25

PEDAC:

inputs: array of arrays
- there will be 8 subarrays
- each subarray will contain 8 numbers: 0's or 1's
- 0's are juicy watermelon
- 1's are seeds

outputs: Number
- the number of total seeds spit out

Rules:
- 0's are watermelon
- 1's are seeds
- if the input is not an array, return undefined
- if the input length !== 8, return undefined
- all subarrays will contain 8 numbers
- all subarrays will contain only 0's and 1's
- you can only eat 1/4 of the water melon at a time
  - order is important, so you can eat the first four elements of the first four arrays, then you eat elements 5-8 of the same first four arrays.
  - then you eat the first four elements (0-3) of the last four subarrays
  - then you eat the last four elements(5-8) of the last four subarrays
  
  
Examples:

// Happy Path
var watermelon1=[
[1, 0, 0, 1, 1, 1, 0, 1], 
[1, 0, 1, 0, 1, 1, 0, 0], 
[1, 1, 1, 1, 0, 0, 0, 0], 
[0, 1, 0, 1, 1, 1, 1, 0], 
[0, 0, 0, 1, 0, 1, 0, 0], 
[1, 1, 1, 0, 0, 0, 1, 1], 
[1, 0, 1, 1, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0]]
console.log(totalSeeds(watermelon1))// 25)

- first four elements of the first four subarrays
[1, 0, 0, 1], 
[1, 0, 1, 0], 
[1, 1, 1, 1], 
[0, 1, 0, 1],
- 10 total seeds > 5, so all the seeds are spit out

last four elements of the first four subarrays
[1, 1, 0, 1], 
[1, 1, 0, 0], 
[0, 0, 0, 0], 
[1, 1, 1, 0],
- 8 total seeds found > 5 so all seeds are spit out
- total seeds spit is now 18

Mental Model:
Extract each quarter of the watermelon into it's on array of arrays. For each quarter, count the number of 1's that appear in the four subarrays. If the total is less than or equal to 5, then 0 is added to the total, otherwise the number of 1's counted is added to the total number of seeds spit out.

Algorithm:
- extract each section of the watermelon
  - to get the first quarter
    - array.slice(0, 4) which returns the first four arrays
    [[1, 0, 0, 1, 1, 1, 0, 1], 
    [1, 0, 1, 0, 1, 1, 0, 0], 
    [1, 1, 1, 1, 0, 0, 0, 0], 
    [0, 1, 0, 1, 1, 1, 1, 0],] 
    - iterate over array of arrays
      - for each subarray slice from 0-4 to get the elements for the first quarter, and slice from 4 to the end to get the elements for the second quarter
    - we should no have two arrays, one for the first quarter and one for the second quater
    
  - this same algorithm can be applied to the 3rd and 4th quarters
    - array.slice(4) returns the last 4 subarrays
    - iterate over these subarrays to get the elements that are for the third and fourth quarters
- for each quarter, filter all of the elements that are equal to 1
- if the amount of 1's is greater than 5, add these to the total
- if the amount of the 1's is less than or equal to 5, add 0
*/


function totalSeeds(watermelon) {
  let firstHalf = watermelon.slice(0, 4);
  let firstQuarter = firstHalf.map(getFirstHalfElements).flat();
  let secondQuarter = firstHalf.map(getSecondHalfElements).flat();
  let secondHalf = watermelon.slice(4);
  let thirdQuarter = secondHalf.map(getFirstHalfElements).flat();
  let fourthQuarter = secondHalf.map(getSecondHalfElements).flat();
  
  return countSeeds(firstQuarter) + countSeeds(secondQuarter) +
         countSeeds(thirdQuarter) + countSeeds(fourthQuarter);
}

function countSeeds(quarter) {
  let seeds = quarter.filter(num => num === 1).length;
  return seeds > 5 ? seeds : 0;
}

function getFirstHalfElements(arr) {
  return arr.slice(0, 4);
}

function getSecondHalfElements(arr) {
  return arr.slice(4);
}

var watermelon1=[
[1, 0, 0, 1, 1, 1, 0, 1], 
[1, 0, 1, 0, 1, 1, 0, 0], 
[1, 1, 1, 1, 0, 0, 0, 0], 
[0, 1, 0, 1, 1, 1, 1, 0], 
[0, 0, 0, 1, 0, 1, 0, 0], 
[1, 1, 1, 0, 0, 0, 1, 1], 
[1, 0, 1, 1, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0]]
console.log(totalSeeds(watermelon1))// 25)

var watermelon2=[
[0, 1, 0, 0, 0, 0, 1, 0], 
[0, 0, 1, 0, 1, 0, 0, 0], 
[0, 1, 1, 0, 1, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0], 
[1, 0, 0, 0, 0, 0, 1, 0], 
[0, 0, 1, 0, 1, 0, 1, 0], 
[0, 1, 0, 1, 1, 0, 0, 0], 
[0, 1, 0, 0, 0, 0, 0, 1]]
console.log(totalSeeds(watermelon2))// 0)

var watermelon3=[
[0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 1, 0, 0, 1], 
[0, 0, 0, 0, 0, 1, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 1, 0, 0, 0, 0], 
[0, 1, 0, 0, 1, 0, 1, 0], 
[1, 0, 0, 0, 0, 0, 0, 0], 
[1, 1, 0, 1, 1, 0, 0, 0]]
console.log(totalSeeds(watermelon3))// 6)