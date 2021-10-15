"use strict";

// Edabit > Hard > Simple Symbols

/*
Create a function that takes a string and determine if it's a valid sequence by either returning true or false. The string will be composed of + and = symbols with several characters between them (e.g. "++d+===+c++==a") and for the string to be true, each letter must be surrounded by a + symbol. So the string to the left would be false.

Examples:

simpleSymbols("f++d+") ➞ false

simpleSymbols("+d+=3=+s+") ➞ true

simpleSymbols("==+p+++++++++====8+z++++") ➞ true

inputs: String
- composed of word characters:[a-z] and + and = and [0-9]

outputs: Boolean
- true if all alpha chars in the input have a + char on either side
- false otherwise

Rules:
- will always be provided an input
- return undefined if the input as anything other than a string
- return an empty string if the string is empty
- case does not matter
- determine if the string is valid by checking that all alpha chars have a + sign on either side of them

Examples:

// Happy Path
simpleSymbols("f++d+") ➞ false
simpleSymbols("+d+=3=+s+") ➞ true
simpleSymbols("==+p+++++++++====8+z++++") ➞ true

// input is not a string
simpleSymbols([]) ➞ undefined
simpleSymbols({}) ➞ undefined
simpleSymbols(null) ➞ undefined
simpleSymbols(NaN) ➞ undefined
simpleSymbols(353) ➞ undefined
simpleSymbols(undefined) ➞ undefined

// input is empty string
simpleSymbols('') ➞ ''

// one char string
simpleSymbols('a') ➞ false

// two char string
simpleSymbols('+a') ➞ false

Data Structures:
String input -> boolean

could use an array?

Mental Model:
Iterate over each char of the input. If the current char is an alpha char, check if the char previous and next char after current are both +. If they are not both +, return false. Continue through all characters. If the loop ends, then the string is valid. 

Algorithm:
- validate the input
- if the input is not a string, return undefined
- if the input is an empty string, return empty string
- if the input is less than 3 chars, return false
- loop over the string
  - for each char, check if the char is an alpha char
    - if char is alpha, check char before, and char after
    - if both chars are +, continue
    - if they are both not +, return false
- return true if loop ends
*/

function simpleSymbols(string) {
  if (typeof string !== 'string') return undefined;
  if (string.length === 0) return '';
  if (string.length < 3) return false;
  
  for (let i = 0; i < string.length; i += 1) {
    let char = string[i]
    
    if (/[a-z]/i.test(char)) {
      if (!(string[i - 1] === '+' && string[i + 1] === '+')) {
        return false;
      }
    }
  }
  
  return true;
}

// Happy Path
console.log(simpleSymbols("f++d+"))// ➞ false
console.log(simpleSymbols("+d+=3=+s+"))// ➞ true
console.log(simpleSymbols("==+p+++++++++====8+z++++"))// ➞ true
console.log(simpleSymbols("======2+++4+u===+i+"))// false)
console.log(simpleSymbols("+u+====3+mmmmm===m++"))// false)

// input is not a string
console.log(simpleSymbols([]))// ➞ undefined
console.log(simpleSymbols({}))// ➞ undefined
console.log(simpleSymbols(null))// ➞ undefined
console.log(simpleSymbols(NaN))// ➞ undefined
console.log(simpleSymbols(353))// ➞ undefined
console.log(simpleSymbols(undefined))// ➞ undefined

// input is empty string
console.log(simpleSymbols(''))// ➞ ''

// one char string
console.log(simpleSymbols('a'))// ➞ false

// two char string
console.log(simpleSymbols('+a'))// ➞ false