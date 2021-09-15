"use strict";

// Mexican Wave

/*
In this simple Kata your task is to create a function that turns a string 
into a Mexican Wave. You will be passed a string and you must return that 
string in an array where an uppercase letter is a person standing up.

Rules:

1. The input string will always be lower case but maybe empty.

2. If the character in the string is whitespace then pass over it as if it 
was an empty seat.

Example:

wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]



inputs: String
- contains lowercase chars and maybe whitespace
- could be an empty string in which case, return []

outputs: Array
- an array of strings with the number of strings equal to the number
of alphabet chars in the input string

Rules:
- the input may be an empty string, return []
- the input string will always be lowercase
- if a char in the input string is whitespace, it stays the same

Example:

The wave explained:
- given the string 'hello', we imagine each char to be a person seated.
- A wave always travels from left to right, so when the wave starts, the 
first person (char) stands up (is capitalized).
  - this means, we need to return the input string in which the first char
  in the word is capitalized -> 'Hello'
  - The person who just stood up then immediately sits down (lowercased), 
  at which point the next person (char) stands up (is capitalized)
  - the same input string is return, this time it will be the second char
  in the string that will be capitalized -> 'hEllo'
  - this continues until the end of the string/ the last char in the string
  has been capitalized

wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
- the string has 5 alpha chars, so the return array will have 5 elements

wave("two words") => ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
- this input has a whitespace chars giving the input string a length of 9,
but there are only 8 alpha chars, resulting in 8 elements in the return
array


Mental Model:
This is a matter of transformation. Transforming an string, into an array
of chars, and then mapping to transfrom each char into the string representing
each stage of the wave. For iteration, the input string will have to be split
into 3 parts.
*/

function wave(str) {
  let waves = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === ' ') continue;

    waves.push(str.slice(0, i) + str.slice(i, i + 1).toUpperCase() + str.slice(i + 1));
  }

  return waves;
}

// Alternate Solution using Map:
// the filter part is used to filter out '' that are returned in the map
// function when a char === ' '
// slicing a string with index 0 to index 0 results in '' so on the first
// iteration of map
// return str.slice(0, idx) + str.slice(idx, idx + 1).toUpperCase() + str.slice(idx + 1);
// -> returns '' + 'H' + 'ello' -> 'Hello'

function wave(str) {
  return str.split('')
            .map((char, idx) => {
              if (char === ' ') return '';
              return str.slice(0, idx) + str.slice(idx, idx + 1).toUpperCase() + str.slice(idx + 1);
            })
            .filter(wave => wave);
}

console.log(wave("hello")) // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("codewars")) // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
console.log(wave("")) // []
console.log(wave("two words")) // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
console.log(wave(" gap ")) // [" Gap ", " gAp ", " gaP "]