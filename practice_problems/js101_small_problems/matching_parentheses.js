"use strict";

function isBalanced(string) {
  let parenCounter = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') parenCounter += 1;
    if (string[i] === ')') parenCounter -= 1;
    if (parenCounter < 0) return false;
  }

  return parenCounter === 0;
}

// Slight variation that increments left AND right parens. If the the right parens
// variable is greater than left parens on any loop, we know that the
// parantheses are not balanced.

function isBalanced(string) {
  let leftParens = 0;
  let rightParens = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') leftParens += 1;
    if (string[i] === ')') rightParens += 1;
    if (rightParens > leftParens) return false; 
  }

  return leftParens === rightParens;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

// Further Exploration
/*
There are a few other characters that should be matching as well. Square 
brackets and curly brackets normally come in pairs. Quotation marks(single 
and double) also typically come in pairs and should be balanced. Can you 
expand this function to take into account those characters?

inputs: string of words
  - words will contain various brackets or single or double quotes
output: boolean

Rules:
  - ASSUMPTION: there will only be one type of bracket or quote in the string!

  - check to see if the brackets in the string are balanced
    - balanced means that there are matching pairs of brackets:
      - a left bracket must precede a right bracket
      - if a right bracket appears before any left brackets return false
      - if at any time during iteration, there are more right brackets
      than left brackets, return false
      - after iteration, check to see if the number of left brackets
      is equal to the number of right brackets
  - for quotationsm we just need to check if the number of appearances of
  quotes at the end of iteration is an even number
    - if the number is even, then it is balanced
    - if the number is odd, then it is unbalanced

Mental Model:

Iterate over a string and check to see if there are the same number of
left brackets as right brackets or an even number of quotation marks.

Examples:

"What [is] this?" => true
- we see a left bracket appears first, so we can increment a counter for
left brackets 1
- a right bracket comes next, so we can increment a counter for the right
bracket by 1
- this string has one left and one right bracket: 1 === 1 => balanced

"[[What]] [is this]]?" => false
- this string is balanced all the way up until the last bracket at which
time the left brackets === right brackets.
- the last bracket is a right bracket, with no left bracket to match it
meaning we are unbalanced and return false

Data Structure:
two objects: one for left brackets and one for right brackets
OR
two arrays: one for left and one for right
  - on each iteration, if the the currrent character is in one of
  the arrays for left or right, we can increment a left counter
  or a right counter


Algorithm:
- Create two arrays
  - one array will contain left brackets
  - the other array will contain right brackets
- declare and initialize two counter variables, one for the left and one
for the right
- create a for loop that will iterate from 0 up to the string length
  - on each loop, if the leftSide includes the current char
    - increase the left counter by 1
  - if the rightSide includes the current char
    - increment the right counter by 1
  - if the right counter > left counter, return false
- after the loop, if leftcounter === right counter, return true
*/

function isBalanced(string) {
  const LEFT_SIDE = ['(', '[', '{'];
  const RIGHT_SIDE = [')', ']', '{'];
  let quoteCounter = 0;
  let leftCount = 0;
  let rightCount = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '"' || string[i] === "'") quoteCounter += 1;
    if (LEFT_SIDE.includes(string[i])) leftCount += 1;
    if (RIGHT_SIDE.includes(string[i])) rightCount += 1;
    if (rightCount > leftCount) return false;
  }

  if (quoteCounter > 0) return quoteCounter % 2 === 0;
  return leftCount === rightCount;
}

// for []

console.log(isBalanced("What [is] this?") === true);
console.log(isBalanced("[[What]] [is this]]?") === false);

// // for ""

console.log(isBalanced("What \"is\" this?") === true);
console.log(isBalanced("\"\"What\"\" \"is this\"\"?") === false);

