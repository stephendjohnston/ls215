"use strict";

// Strip Comments
// --------------

/*
Complete the solution so that it strips all text that follows any of a set 
of comment markers passed in. Any whitespace at the end of the line should 
also be stripped out.

Example:

Given an input string of:

"apples, pears # and bananas\ngrapes\nbananas !apples"

The output expected would be:

"apples, pears\ngrapes\nbananas"

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

PEDAC
-----

inputs: string, array
- words separated by ", " or newlines (\n) or comments [!, ?]
- array will contain chars that are to be used as comment indicators

outputs: string
- comments removed
- whitespace at end of a line should be removed

Rules: \
- strip all text that follows a comment char up to a newline
- strip out any whitespace that may remain at the end of a line
- if no comments are provided return the input string
- if the input string is empty, return an empty string

Examples:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"


Mental Model:
Create a new empty string that will be the result of removing the text
after comments. Create a loop that will loop that up to the length of the
input string. If the current char in the input string is one of the comment
indicators, enter a new loop that will start at the current index + 1. In this
loop, while the current char is not a newline, keep looping. Once a newline is
encountered, exit the loop. Add the current char to the result strings
*/

// My hack and slash solution

function checkComments(input, markers) {
  let result = '';

  for (let i = 0; i < input.length; i += 1) {
    if (markers.includes(input[i])) {
      while (input[i] !== '\n') {
        i += 1;
        if (i > input.length) {
          break;
        }
      }
    }

    if (i >= input.length) {
      break;
    }

    result += input[i];
  }

  return result.replace(' \n', '\n').trim();
}

console.log(checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))// === "apples, plums\npears\noranges")
console.log(checkComments("Q @b\nu\ne -e f g", ["@", "-"]))// === "Q\nu\ne")

// Top codewar solution

function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}

// Same solution, just written how I would write it

function checkComments(input, markers) {
  return input.split('\n').map((line, idx) => {
    return markers.reduce((line, marker) => {
      return line.split(marker)[0].trim(); 
    }, line)
  }).join('\n');
}

// Code Breakdown using: "apples, plums % and bananas\npears\noranges !applesauce"
/*
Split the input on newlines => input.split('\n')
=> [ 'apples, plums % and bananas', 'pears', 'oranges !applesauce' ]
Map over array and return lines without comments and text that follows comments
first line = 'apples, plums % and bananas'
first marker is '%'
line.split(marker)[0].trim() => 'apples, plums'
second marker is '!'
line.split(marker)[0].trim() => 'apples, plums'
- this line returns the same string because it does contain the marker '!'
'apples, plums' gets returned to map
second line = 'pears'
it has no markers so reduce doesn't alter line and returns pears to map
third line = 'oranges !applesauce'
first marker is '%'
line.split(marker)[0].trim() => 'oranges !applesauce'
second marker is '!'
=> line.split(marker)[0].trim() => 'oranges'
returns 'oranges' to map

we now have => [ 'apples, plums', 'pears', 'oranges' ]
and join it with newlines to get the result

apples, plums\npears\noranges
*/