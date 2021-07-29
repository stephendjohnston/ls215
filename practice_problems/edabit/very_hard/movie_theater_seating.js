"use strict";

// Movie Theater Seating
// ---------------------

/*
Problem:

A group of n friends are going to see a movie. They would like to find a 
spot where they can sit next to each other in the same row. A movie theater's
seat layout can be represented as a 2-D matrix, where 0s represent empty 
seats and 1s represent taken seats.

[[1, 0, 0, 0, 1, 1, 1],
[1, 1, 1, 0, 1, 1, 1],
[1, 0, 1, 0, 1, 0, 1],
[1, 1, 0, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 1],
[1, 0, 1, 1, 0, 0, 0]]

Create a function that, given a seat layout and the number of friends n, 
returns the number of available spots for all n friends to sit together. 
In the above example, if n = 3, there would be 2 spots (the first row and 
last row).

Examples:

groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1, 0, 0]
], 2) ➞ 3

groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0],
], 4) ➞ 2

Notes:
- Multiple free arrangements that overlap still count as distinct 
arrangements (see example #2).


PEDAC
-----

Inputs: array of arrays, Number (n)
  - each nested array represents a row of seats in a movie theater
  - each array will consist of 1's and 0's
    - the 1's represents seats taken
    - the 0's represents seats available
Outputs: Number
  - represents the number of seating arrangments available where all n
  friends would get to sit together

Rules:
  - Multiple free arrangements that overlap still count as distinct 
arrangements.
    - eg. given 2 friends and this row of seats [0, 0, 0] gives 2 possible
    arrangements, the first and second seat, and the second and third seat
  - 0's represent empty seats
  - 1's represent taken seats
  - n friends is the number of consecutive empty seats that you need for
  there to be a valid seating arrangement

Examples:

groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1, 0, 0]
], 2) ➞ 3

- first arrangement: third row at seats 1 and 2
- second: 4th row, seats 5 and 6
- third: last row, row 6, seats 6 and 7

Mental Model:

Create a variable to count the number of arrangements. Iterate
over the array of arrays. Iterate over each nested array. Traverse
over the array n elements at a time. For instance, given 2 friends, you
begin at index 0 and select the seat at index 0 and 1 and see if both
seats are empty, if they are, you add one to the count. If not, you move
to the next seats at index 1 and index 2. Continue this process until you
get to the length of the array minus the amount of friends.

Algorithm:
- availableSpots = 0;
- loop over outer array using forEach
  - on each iteration, loop over the nested array using a for loop
  that will loop the nestedarray length - friends
    - slice from the current index upto the num of friends
      - if every element is a 0 add 1 to the available spots
- return available spots


*/

function groupSeats(seats, friends) {
  return seats.reduce((spots, row) => {
    return spots + validSeatArrangement(row, friends);
  }, 0);
}

function validSeatArrangement(row, friends) {
  let availableSpots = 0;

  for (let seat = 0; seat <= row.length - friends; seat += 1) {
    let currentSeats = row.slice(seat, friends + seat);
    if (currentSeats.every(el => el === 0)) {
      availableSpots += 1;
    }
  }

  return availableSpots;
}


console.log(groupSeats([
  [1, 0, 1, 0, 1, 0, 1], 
  [0, 1, 0, 1, 0, 1, 0], 
  [0, 0, 0, 0, 0, 0, 0], 
  [1, 0, 1, 1, 0, 0, 1], 
  [1, 1, 1, 0, 0, 0, 1], 
  [0, 1, 1, 1, 1, 0, 0]
], 7) === 1)

console.log(groupSeats([
  [1, 0, 0, 0, 1, 1, 1], 
  [1, 1, 1, 0, 1, 1, 1], 
  [1, 0, 1, 0, 1, 0, 1], 
  [1, 1, 0, 1, 1, 0, 1], 
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0]
], 3) === 2)

console.log(groupSeats([
  [1, 0, 0, 0, 0, 1, 1], 
  [1, 1, 1, 0, 1, 1, 1], 
  [1, 0, 1, 0, 1, 0, 1], 
  [1, 1, 0, 1, 1, 0, 1], 
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0]
], 4) === 1)

console.log(groupSeats([
  [1, 0, 1, 0, 0, 1, 1], 
  [1, 1, 1, 0, 1, 1, 1], 
  [1, 0, 1, 0, 1, 0, 1], 
  [1, 1, 0, 1, 1, 0, 1], 
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0]
], 5) === 0)

console.log(groupSeats([
  [1, 0, 1, 0, 0, 1, 1], 
  [1, 1, 1, 0, 1, 1, 1], 
  [1, 0, 1, 0, 1, 0, 1], 
  [1, 1, 0, 1, 0, 0, 1], 
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0]
], 2) === 4)

console.log(groupSeats([
  [1, 0, 1, 0, 1, 0, 1], 
  [0, 1, 0, 1, 0, 1, 0], 
  [0, 0, 1, 1, 1, 1, 1], 
  [1, 0, 1, 1, 0, 0, 1], 
  [1, 1, 1, 0, 1, 0, 1], 
  [0, 1, 1, 1, 1, 0, 0]
], 2) === 3)

console.log(groupSeats([
  [1, 0, 1, 0, 1, 0, 1], 
  [0, 1, 0, 0, 0, 0, 0], 
], 4) === 2)
