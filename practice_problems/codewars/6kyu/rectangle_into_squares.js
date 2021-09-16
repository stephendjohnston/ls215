"use strict";

// Rectangle Into Squares

/*
You will be given two dimensions

1. a positive integer length
2. a positive integer width

You will return a collection with the size of each 
of the squares.

Examples in general form:
(depending on the language)

sqInRect(5, 3) should return [3, 2, 1, 1]
sqInRect(3, 5) should return [3, 2, 1, 1]
  

Notes:

lng == wdth as a starting case would be an entirely different problem and 
the drawing is planned to be interpreted with lng != wdth. (See kata, Square 
into Squares. Protect trees!


inputs: Two Numbers
- length and width as whole numbers > 0
- length !== width

outputs: Array
- each element will be a number representing a size of the squars that can
fit into the rectangle

Rules:
- length and width cannot be the same number, return null if they are
- the largest sqaure that can fit into a rectangle will be equal the smaller
of the two numbers that make up the rectangle
  - if the rectangle is length = 5, and width = 3 then the largest square
  that can fit into the rectangle will be 3 by 3.
- the smallest squares will be 1 by 1.

Examples:

sqInRect(5, 3) should return [3, 2, 1, 1]
- in this there are 15 total squares of 1 by 1, but we want to get the
largest possible squares

length = 5
width = 3
 _ _ _ _ _
| | | | | |
 _ _ _ _ _
| | | | | |
 _ _ _ _ _
| | | | | |
 - - - - - 

- the largest square possible would be 3 by 3. This takes up 9 of the 15
squares so that there are 6 left.

3x3
 _ _ _ _ _
|x|x|x| | |
 _ _ _ _ _
|x|x|x| | |
 _ _ _ _ _
|x|x|x| | |
 - - - - - 

 length = 5 - 3 = 2

- since we took 9 of the squares, the new length of the rectangle is
now 2 by 3.

length = 2
width = 3
 _ _
| | |
 _ _
| | |
 _ _
| | |
 - - 

- the largest square that can fit into 2 by 3 is 2 by 2

2x2
 _ _
|x|x|
 _ _
|x|x|
 _ _
| | |
 - - 

 width = 3 - 2 = 1

- 2 by 2 = 4 squares meaning there 2 squares left
- the rectangles new dimensions are now 2 by 1

length = 2
width = 1
 _ _
| | |
 - - 

- a square of 1 by 1

 _ _
|x| |
 - - 

 length = 2 - 1 = 1

- new rectangle dimensions are now 1 by 1
length = 1
width = 1
 _ 
| |
 - 


- another square of 1 by 1

 _ 
|x| 
 - 
 subtract 1

Mental Model:
The largest square that can exist in a rectangle will be equal to the square
of the smaller of the length or width of the rectangle. This will be the number
that will be add to the array of squares to be returned. To get the next
value, we need to update the length and width of the rectangle, to determine
the smaller of the two: length and width. Subtract the value that was added
to the squares from the longer of the two values. Repeat this pattern until
both length and width are 1.

Algorithm:
- create an array 'squares'
- create a while loop that will loop while length and width are > 1
  - create a variable 'square' that will be set to the value of the
  smaller of length and width
    - square = length > width ? width : length;
  - push square to squares
  - subtract square from the larger of length and width
- return the array of squares
*/

function sqInRect(length, width) {
  if (length === width) return null;

  const squares = [];

  while (length > 0 && width > 0) {
    let square = length > width ? width : length;

    squares.push(square);

    length > width ? length -= square : width -= square;
  }

  return squares;
}

console.log(sqInRect(5, 5))// null
console.log(sqInRect(5, 3))// [3, 2, 1, 1]
console.log(sqInRect(3, 5))// [3, 2, 1, 1]
console.log(sqInRect(20, 14))// [14, 6, 6, 2, 2, 2]