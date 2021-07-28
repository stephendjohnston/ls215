"use strict";

// Alphabet Clash
// --------------

/*
Problem:

In this challenge, you have to establish the points scored by two players 
(called Player A and Player Z) after an ASCII game session.

The two players place randomly the 26 letters of the English alphabet in a 
string and ten integers (ranged from 0 up to 25) in an array. Each integer 
represents the index of a letter to eliminate from the opponent's string so 
that the two players will afford the battle with two reduced strings of 16 
letters.

How the data appear and how the indices are eliminated
str_A = "MZNHUVIOEPTWFJCBXKALSDQGYR"
// The 26 letters of Player A ...

str_Z = "YFTUCSQOMGKPXNDWHIVJRABZEL"
// ... and the 26 letters of Player Z

ind_A = [1, 3, 2, 8, 10, 12, 9, 7, 4, 22]
// The indices to eliminate into str_Z:
// str_Z[1] is "F", delete it
// str_Z[3] is "U", delete it
// and so on ...

ind_Z = [21, 24, 25, 3, 4, 1, 8, 9, 10, 17]
// ... and the indices to eliminate into str_A:
// str_A[21] is "D", delete it!
// str_A[24] is "Y", delete it!
// and so on ...

str_A = "MNVIOWFJCBXALSQG"
// Player A now has 16 letters
// The relative order is the same as before the elimination ...

str_Z = "YSQPNDWHIVJRAZEL"
// ... and so is for Player Z
Now, you have to compare the letters of the players' strings progressively 
from the left, obtaining their ASCII values: during this series of clashes, 
the highest letter (meaning the greater ASCII value) gives to his possessor 
a number of points equal to its value less the one of its opponent. If the 
letters are equal for both players, they don't gain any points.

How the points are assigned
str_A = "MNVIOWFJCBXALSQG"

str_Z = "YSQPNDWHIVJRAZEL"

// Each letter has an ASCII value...
// Starting from left:

Player A = 77, 78, 86, 73, 79, 87, 70, 74, 67, 66, 88, 65, 76, 83, 81, 71
Player Z = 89, 83, 81, 80, 78, 68, 87, 72, 73, 86, 74, 82, 65, 90, 69, 76

// Each ASCII value is compared with its corresponding among the players

// notation: Player A vs. Player Z

// Clash 1: 77 vs. 89
// Player Z wins and he obtains 89 - 77 = 12 points

// Clash 2: 78 vs. 83
// Player Z wins and he obtains 83 - 78 = 5 points

// Clash 3: 86 vs. 81
// Player A wins and he obtains 86 - 81 = 5 points

// Clash 4: 73 vs, 80
// Player Z wins and he obtains 80 - 73 = 7 points

// Clash 5: 79 vs. 78
// Player A wins and he obtains 79 - 78 = 1 point

// and so on...
You are given four parameters:

- str_A is a string containing the 26 letters placed by Player A (only unique 
uppercase letters).
- ind_A is an array containing the 10 indices (as integers ranged from 0 up 
to 25) submitted by Player A.
- str_Z is the string of Player Z.
- ind_Z is the array of Player Z.

You have to implement a function that returns the score of the players as 
an object with two entries named "A" and "Z" (in the given order):

// Result of the step-by-step example game:

{ A: 64, Z: 96 }

Examples:

alphaClash(
  "MZNHUVIOEPTWFJCBXKALSDQGYR",
  [1, 3, 2, 8, 10, 12, 9, 7, 4, 22],
  "YFTUCSQOMGKPXNDWHIVJRABZEL",
  [21, 24, 25, 3, 4, 1, 8, 9, 10, 17]
) ➞ { A: 64, Z: 96 }

alphaClash(
  "OZLICHFRKYBVUDSPWXJNGTQAEM",
  [8, 6, 4, 2, 0, 10, 12, 14, 16, 18],
  "WKJVUNXHRFDIOBTCSLZMPYGQAE",
  [7, 5, 3, 1, 9, 11, 13, 15, 17, 19]
) ➞ { A: 77, Z: 63 }

alphaClash(
  "IBXOWMUSGYPADJCLVKETQRZHFN",
  [23, 19, 21, 22, 2, 4, 6, 1, 0, 12],
  "TOLFIYHGKWAXRBDQMVNJSPCUZE",
  [15, 8, 2, 1, 0, 25, 12, 13, 16, 14]
) ➞ { A: 75, Z: 50 }

Notes:

- Remember: ind_A are the indices choose by Player A, and they eliminate the 
letters of str_Z and vice-versa for ind_Z.
- Points are gained by the possessor of the highest letter in every single 
clash, equal to the ASCII value of the higher letter less than the ASCII 
value of the lower letter. If two letters are the same it's a draw, and 
nothing happens.
- The given data will be valid: only 26 different uppercased letters into 
strings, only 10 different integers into arrays. There aren't exceptions to 
handle.


PEDAC
-----

Inputs: 2 Strings and 2 Arrays
  - Strings will be 25 characters: the alphabet
  - Arrays will contain 10 integers from 0 - 25
Outputs: Object
  - two properties
    - The score of player A and Player Z

Rules:
- All given data will be valid, no need to validate
- 4 Parameters:
  - Param 1 is Player A String of letters
  - Param 2 is Player A array of indexes
  - Param 3 is Player Z String of letters
  - Param 4 is Player Z array of indexes
- Player A indexes eliminate Player Z's letters
- Player Z indexes eliminate Player A's letters
- Each player will will have letters from it's list of letters elminated
- The remaining letters ASCII values from each player will be compared
  - eg. letters from both players at index 0 will be compared and so on, 
  whichever letter has the higher ASCII value, the difference between the 
  two numbers is added to the player's score whose value was higher.
- return an object that shows both players scores

Examples:

SEE ABOVE EXAMPLE EXPLAINED

Mental Model:

Create an object with two properties. One for player A and one for player Z.
Set their values to 0.
Split a player's letters into an array of characters. Create a while loop
that will loop until the other player's index Array is empty. On each loop
unshift an index from the index array. Use splice to remove the char from
the array of chars at the current index that was removed from the array
of indexes. Do this simultaneously for both players. We now have 2 arrays
with 16 characters. 
map over both arrays of characters and convert each char to its ASCII value.
Iterate over the the arrays of ascii values and compare the values at equal
indexes. Take the difference and add it to the appropriate players score in
the object. 

Data Structure:

- Object
  - Player A: 0
  - Player Z: 0
Array
  - letter characters
  - indexes
Number
  - ASCII value of chars
  - Score for each player

Algorithm:
- create a score object
  - { A: 0, B: 0}
- split both players string of letters into array of letters
- create a for loop that will iterate up to 10 (length of index array)
  - on each loop, use splice to remove the letter at the current i of the index
  array from the array of letters
  - do for both array of letters
- map over both arrays of letters and convert each letter to it's ASCII value
  - use letter.charCodeAt(0) to get each value
- Create a for loop that will iterate up to 16 (length of ASCII arrays)
  - on each loop, 
    - if PlayerA letter > PlayerZ letter
      - score.A += PlayerA ASCII - PlayerZ ASCII
    - if PlayerZ ASCII > PlayerA ASCII
      - score.Z += PlayerZ ASCII - PlayerA ASCII
- return object


*/

function alphaClash(strA, indA, strZ, indZ) {
  const score = { A: 0, Z: 0 };
  const arrA = convertToAscii(strA.split(''), indZ);
  const arrZ = convertToAscii(strZ.split(''), indA);

  for (let i = 0; i < arrA.length; i += 1) {
    let [asciiA, asciiZ] = [arrA[i], arrZ[i]];

    if (asciiA > asciiZ) {
      score.A += asciiA - asciiZ;
    } else if (asciiZ > asciiA) {
      score.Z += asciiZ - asciiA;
    }
  }

  return score;
}

// This function selects all of the characters that are not at the indexes
// of the other players index array. It then maps over this array of chars
// and uses charCodeAt to get the ASCII values for each char.
function convertToAscii(charArray, indexes) {
  return charArray.filter((_, idx) => !indexes.includes(idx))
                  .map(char => char.charCodeAt());
}

console.log(alphaClash(
  "MZNHUVIOEPTWFJCBXKALSDQGYR",
  [1, 3, 2, 8, 10, 12, 9, 7, 4, 22],
  "YFTUCSQOMGKPXNDWHIVJRABZEL",
  [21, 24, 25, 3, 4, 1, 8, 9, 10, 17]
))// {A: 64, Z: 96})

console.log(alphaClash(
  "OZLICHFRKYBVUDSPWXJNGTQAEM",
  [8, 6, 4, 2, 0, 10, 12, 14, 16, 18],
  "WKJVUNXHRFDIOBTCSLZMPYGQAE",
  [7, 5, 3, 1, 9, 11, 13, 15, 17, 19]
))// {A: 77, Z: 63})

console.log(alphaClash(
  "IBXOWMUSGYPADJCLVKETQRZHFN",
  [23, 19, 21, 22, 2, 4, 6, 1, 0, 12],
  "TOLFIYHGKWAXRBDQMVNJSPCUZE",
  [15, 8, 2, 1, 0, 25, 12, 13, 16, 14]
))// {A: 75, Z: 50})

console.log(alphaClash(
  "IBXOWMUSGYPADJCLVKETQRZHFN",
  [15, 8, 2, 1, 0, 25, 12, 13, 16, 14],
  "IBXOWMUSGYPADJCLVKETQRZHFN",
  [15, 8, 2, 1, 0, 25, 12, 13, 16, 14]
))// {A: 0, Z: 0})