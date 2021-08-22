"use strict";

// Directions Reduction
// --------------------

/*
Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions 
were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are 
opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is 
a needless effort. Since this is the wild west, with dreadfull weather and 
not much water, it's important to save yourself some energy, otherwise you 
might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following:

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and immediately "SOUTH" is not 
reasonable, better stay to the same place! So the task is to give to the 
man a simplified version of the plan. A better plan in this case is 
simply:

["WEST"]

Other examples:

In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns 
an array of strings with the needless directions removed (W<->E or S<->N 
side by side).

Notes
- Not all paths can be made simpler. The path 
["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", 
"WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each 
other and can't become such. Hence the result path is itself : 
["NORTH", "WEST", "SOUTH", "EAST"].


PEDAC
-----

inputs: Array
- contains strings
  - will only contain these strings
  - ["NORTH", "SOUTH", "EAST", "WEST"]
outputs: Array
- contains strings
- only the neccessary directions will be kept from the input array

Rules:
-  take an array of strings and returns an array of strings with the 
needless directions removed.
- needless directions are opposite directions that appear next to each
other in the array. eg. N and S next to each other are useless since
if you go North and then South, you are still in the same place. 
- if the input array has only one direction, return the array

Examples:

["NORTH", "SOUTH", "EAST", "WEST"] -> []
-> North and South cancel each other
-> West and East cancel each other.

["NORTH", "WEST", "SOUTH", "EAST"] -> ["NORTH", "WEST", "SOUTH", "EAST"]
-> Since North and South are not directly opposite, the don't cancel each
other
-> Same with with West and East

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] -> ["WEST"]
-> North and South cancel
["SOUTH", "EAST", "WEST", "NORTH", "WEST"]
-> East and West cancel
["SOUTH", "NORTH", "WEST"]
-> South and North cancel leaving "WEST"

Mental Model:
Iterate over the array and check if two consecutive directions are opposites
of each other. If they are, remove the from the array. Use a flag that will
set to true if items are removed. This flag will tell the loop to keep
looping until one loop of all the elements in the array occurs with no elements
removed. If this happens then the loop will break and we can return the array.
The first loop will loop while the flag is true. The inner loop will iterate
over the elements of the array checking 2 consecutive elements. If they are
opposites, then they are removed and the flag is set to true. The outer loop
will keep iterating. If the inner loop goes through without removing elements
the flag will be false and the outer loop will break, at which point
we can return the array. 

Algorithm:
- if input array length <= 1, return the array
- create a function that will check if a directions are opposites
- checkDirections = true;
- while (checkDirections)
  - set checkDirections = false;
  - iterate over the array of directions using a for loop
    - get the elements at the current index and index + 1 of the directions
    array
    - use the opposite directions function to check the current directions
    - if this returns true, use splice to remove these directions from the array
    - set the checkDirections = true
    - break out of the loop
- return array

*/

function oppositeDirections(dir1, dir2) {
  return (dir1 === "NORTH" && dir2 === "SOUTH") || 
         (dir1 === "SOUTH" && dir2 === "NORTH") ||
         (dir1 === "WEST" && dir2 === "EAST") ||
         (dir1 === "EAST" && dir2 === "WEST");
}

function dirReduc(arr) {
  if (arr.length <= 1) return arr;

  let checkDirections = true;

  while (checkDirections) {
    checkDirections = !checkDirections;

    for (let i = 0; i < arr.length; i += 1) {
      let [dir1, dir2] = [arr[i], arr[i + 1]];
      if (oppositeDirections(dir1, dir2)) {
        arr.splice(i, 2);
        checkDirections = !checkDirections;
        break;
      }
    }
  }

  return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))// ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))// ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))// []
