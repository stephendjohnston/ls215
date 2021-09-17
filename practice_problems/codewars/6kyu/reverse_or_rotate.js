"use strict";

// Reverse or Rotate

/*
The input is a string str of digits. Cut the string into chunks 
(a chunk here is a substring of the initial string) of size sz 
(ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits 
is divisible by 2, reverse that chunk; otherwise rotate it to the left by 
one position. Put together these modified chunks and return the result as a 
string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk 
of size sz hence return "".

Examples:

revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"

Example of a string rotated to the left by one position:

s = "123456" gives "234561".


inputs: String, Number
- String will be a string of digits 0-9
  - if empty return ""
- If the Number <= 0 or Number > String.length, return ""

outputs: String
- will contain the same digits as the input string

Rules:
- if the input string is empty or sz is <= 0, return ""
- if the sz > string.length, return ""
- a valid input string will only contain the chars 0-9
- take sz chunks of the string, if the sum of cubes of its digits is
evenly divisible by 2, reverse that chunk of string
- otherwise rotate the chunk by one digit
  - take the first digit and move it to the end of that chunk of
  digits
- return the string with its reverse or rotated chunks

Examples:

revrot("123456987654", 6) --> "234561876549"
- slice the string by 6 digits
- first chunk -> '123456'
- get the cubed value of each digit -> [1, 8, 27, 64, 125, 216]
- get the sum of these values and check if evenly divisible by 2
  -> 441 % 2 === 1 -> 1 remainder so rotate the digits
  -> '123456' becomes '234561'
- 2nd chunk -> '987654'
- [729, 512, 343, 216, 125, 64] -> 1989 % 2 === 1
  - rotate chunk -> '876549'


revrot("123456987653", 6) --> "234561356789"


Algorithm:
- validate the input
- create a for loop that will start from 0 and increment by sz and break
when i > str length
  - on each loop, get the chunk of string by slicing the string
  from i upto i + sz
  - use function getSumOfCubes to return a number and if this number
  % 2 === 0, reverse this string
  - if it is not evenly divisible
    - slice the chunk from index 1 to the end of the string and
    concatenate it with the first digit of the chunk


*/

function validateInput(str, size) {
  return size > 0 && str.length > 0 && str.length >= size && size;
}

function getSumOfCubes(chunk) {
  return [...chunk].map(digit => {
    return Number(digit)**3;
  }).reduce((acc, num) => acc + num);
}

const rotateChunk = str => str.slice(1) + str[0];
const reverseChunk = str => str.split('').reverse().join('');

function revrot(str, sz) {
  if (!validateInput(str, sz)) return '';

  let result = '';

  for (let i = 0; i < str.length; i += sz) {
    let chunk = str.slice(i, i + sz);
    if (sz > chunk.length) break;

    let chunkSum = getSumOfCubes(chunk);

    if (chunkSum % 2 === 0) {
      result += reverseChunk(chunk);
    } else {
      result += rotateChunk(chunk)
    }
  }

  return result;
}

console.log(revrot("123456987654", 6))// --> "234561876549"
console.log(revrot("123456987653", 6))// --> "234561356789"
console.log(revrot("66443875", 4))// --> "44668753"
console.log(revrot("66443875", 8))// --> "64438756"
console.log(revrot("664438769", 8))// --> "67834466"
console.log(revrot("123456779", 8))// --> "23456771"
console.log(revrot("", 8))// --> ""
console.log(revrot("123456779", 0))// --> "" 
console.log(revrot("563000655734469485", 4))// --> "0365065073456944"