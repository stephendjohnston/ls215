"use strict";

// Give Me a Diamond

/*
Task:

You need to return a string that looks like a diamond shape when printed on 
the screen, using asterisk (*) characters. Trailing spaces should be removed, 
and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it 
is not possible to print a diamond of even or negative size.

Examples:

A size 3 diamond:

 *
***
 *

...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *

...that is:

"  *\n ***\n*****\n ***\n  *\n"


inputs: Number
- odd number is a valid input
- negative or even number is invalid and should return null

outputs: String
- contains:
  - spaces, '*' and newlines or '\n'


Rules:
- use asterisk chars for the diamond: '*'
- every line of diamond should be terminated by '\n'
- every line of asterisks that is not the middle line will contain space chars
- the end of every line should have trailing white space eliminated
- the middle line of the diamond will have the same number of asterisk chars
equal to the input number
  - each line preceding and following the middle line will decrement by 2
  asterisk chars per line
- the top and bottom of the diamond will both have 1 asterisk char
- the middle line will have no whitespace
  - each line following and preceding the middle line will increment space chars
  by 1
  - input number - 1 / 2 will be the number of space chars on the first line
  of 1 asterisk

Examples:

diamond(1), "*\n"
diamond(3), " *\n***\n *\n"
-> number of space chars => (3 - 1) / 2 = 1
- ' *\n'
decrement space chars -= 1 -> space chars = 0
increment '*' by 2 -> '***'
- ' *\n***\n'
increment space chars by 1 -> 1
decrement '*' by 2 -> '*'
- ' *\n***\n *\'
diamond(5), "  *\n ***\n*****\n ***\n  *\n"

Mental Model:
Create a for loop that will iterate from 0 up to the input number.
Create a variable that will count the number of space chars to input.
Create a variable that will count the number of asterisk chars to input. 
Create an array that will hold these strings. Join the array by '\n'
after the strings of spaces and asterisks have been added. 
*/


function diamond(n) {
  if (n < 1 || n % 2 === 0) return null;

  let diam = ''
  let stars = 1;
  let spaces = (n - 1) / 2;

  for (let i = 0; i < n; i += 1) {
    diam += ' '.repeat(spaces);
    diam += '*'.repeat(stars);
    diam += '\n';

    if (spaces > 0 && i < n / 2) {
      spaces -= 1;
      stars += 2
    } else {
      spaces += 1;
      stars -= 2;
    }
  }

  return diam;
}

console.log(diamond(1))// "*\n"
console.log(diamond(3))// " *\n***\n *\n"
console.log(diamond(5))// "  *\n ***\n*****\n ***\n  *\n"
console.log(diamond(2))// null
console.log(diamond(-3))// null
console.log(diamond(0))// null