"use strict";

// Parantheses Clusters
// --------------------

/*
Problem:
--------

Write a function that groups a string into parentheses cluster. Each cluster 
should be balanced.

Examples:
---------

split("()()()") ➞ ["()", "()", "()"]

split("((()))") ➞ ["((()))"]

split("((()))(())()()(()())") ➞ ["((()))", "(())", "()", "()", "(()())"]

split("((())())(()(()()))") ➞ ["((())())", "(()(()()))"]

Notes:
------
- All input strings will only contain parentheses.
- Balanced: Every opening parens ( must exist with its matching closing 
parens ) in the same cluster.


PEDAC
-----

Inputs: String
  - only contains parantheses characters => ()
Outputs: Array or strings
  - strings will be clusters of parantheses

Rules:
- All input strings will only include parantheses
- Every opening parens ( must exist with its matching closing parens ) in 
the same cluster.

Examples:

split("((()))(())()()(()())") ➞ ["((()))", "(())", "()", "()", "(()())"]


Data Structure:
- Array
  - return array of strings

Mental Model:
Iterate over an array of parantheses characters. Build strings of balanced
clusters. For every left '(' parantheses add it to the build string
and increment a counter by 1, for everyright ')' parantheses add it the build
string and decrement a counter by 1. If the counter is === 0. That means you
have built a cluster and can push it to the result array. Reset the build
string to an empty string
*/

function split(parans) {
  const clusters = [];
  let counter = 0;
  let cluster = '';
  
  [...parans].forEach(paran => {
    if (paran === '(') {
      cluster += '(';
      counter += 1;
    } else {
      cluster += ')';
      counter -= 1;
    }

    if (counter === 0) {
      clusters.push(cluster);
      cluster = '';
    }
  });

  return clusters;
}

console.log(split("()()()"))// ["()", "()", "()"])
console.log(split(""))// [])
console.log(split("()()(())"))// ["()", "()", "(())"])
console.log(split("(())(())"))// ["(())", "(())"])
console.log(split("((()))"))// ["((()))"])
console.log(split("()(((((((((())))))))))"))// ["()", "(((((((((())))))))))"])
console.log(split("((())()(()))(()(())())(()())"))// ["((())()(()))", "(()(())())", "(()())"])
console.log(split("((()))(())()()(()())"))// ["((()))", "(())", "()", "()", "(()())"])
console.log(split("((())())(()(()()))"))// ["((())())", "(()(()()))"])
console.log(split("(()(()()))()(((()))()(()))(()((()))(())())"))// ["(()(()()))", "()", "(((()))()(()))", "(()((()))(())())"])