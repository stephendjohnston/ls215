"use strict";

// Track the Robot Part 2
// ----------------------

/*
Problem:
This robot roams around a 2D grid. It starts at (0, 0) facing North. After 
each time it moves, the robot rotates 90 degrees clockwise. Given the amount 
the robot has moved each time, you have to calculate the robot's final 
position.

To illustrate, if the robot is given the movements 20, 30, 10, 40 then it 
will move:

- 20 steps North, now at (0, 20)
- 30 steps East, now at (30, 20)
- 10 steps South. now at (30, 10)
- 40 steps West, now at (-10, 10)

...and will end up at coordinates (-10, 10).

Inputs: 0 or more integers
Outputs: Array of 2 integers indicating robot final position

Rules:
  - after each move, the robot rotates 90 degrees clockwise
  - The robot moves in these directions in this order
    - N, E, S, W
  - The move can be positive or negative
  - N and E are postive and S and W are negative
    - If you the robot moves negative in one direction, it's actually
    positive in the other direction
      - eg. -10 S is actually +10 N or -10 N is +10 South
    - Since N and S are on the same plane, they share the same position
    number, eg. N +20 and S +30 === -10 position

Examples:

trackRobot(-10, 20, 10) ➞ [20, -20]
northAndSouth = 0
eastAndWest = 0
- Move North -10 or move South 10
northAndSouth = -10
- Move east 20 or move West -20
eastAndWest = 20
- Move South 10 or move North -10
northAndSouth = -20
=> [20, -20]

Mental Model:

Take a random number of integers put them into an array. Create variables
to hold the value for North and South, and for East and West. Filter the even
indexes into an array that will hold E and W values and all the odd indexes
into an array that will hold all the N and S values. 

For N and S, odd indexes will be N and even will be S.
If the N values are positive, add the value to the position. If the N
value is negative, subtract the value from the position.
If the S value is negative, add the value to the position. If the S
value is positive, subtract the value from the position. 

Algorithm:

Use the rest parameter for the inputs
  - filter the inputs into an array of N and S values and E and W values
    - Odd indices will be N and S
    - Even will be E and W
    - filter these arrays to get arrays of N values, S values, E values, and
    W values
    - Get the sums of each array
      - North minus South === NorthSouth position
      - East minus West === EastWest Position
*/

const getEvenIndexes = (_, idx) => idx % 2 === 0;
const getOddIndexes = (_, idx) => idx % 2 === 1;
const getSum = (sum, val) => sum + val;

function trackRobot(...steps) {
  let northAndSouth = steps.filter(getEvenIndexes);
  let eastAndWest = steps.filter(getOddIndexes);
  let north = northAndSouth.filter(getEvenIndexes);
  let south = northAndSouth.filter(getOddIndexes);
  let east = eastAndWest.filter(getEvenIndexes);
  let west = eastAndWest.filter(getOddIndexes);

  north = north.reduce(getSum, 0);
  south = south.reduce(getSum, 0);
  east = east.reduce(getSum, 0);
  west = west.reduce(getSum, 0);

  let positionNS = north - south;
  let positionEW = east - west;

  return [positionEW, positionNS];
}

console.log(trackRobot(20, 30, 10, 40));                // [-10, 10])
console.log(trackRobot(10, -10, -10, 10));              // [-20, 20])
console.log(trackRobot());                              // [0, 0])
console.log(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // [6, 5])
console.log(trackRobot(1, 0, 2, 0, 3, 0, 4, 0, 5, 0));  // [0, 3])
console.log(trackRobot(0, 1, 0, 2, 0, 3, 0, 4, 0, 5));  // [3, 0])