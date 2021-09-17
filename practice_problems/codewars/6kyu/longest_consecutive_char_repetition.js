"use strict";

// Character with longest consecutive repetition

/*
For a given string s find the character c (or C) with longest consecutive 
repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more 
characters with the same l return the first in order of appearance.

For empty string return:

["", 0]


inputs: String
- any chars are valid
- assume case sensitivity where 'A' !== 'a'

outputs: Array
- 2 element array
  - first element is a string, representing that char that has the longest
  repetition
  - the second element is a number, representing the number of times the char
  repeats

Rules:
- for an empty string input, return ["", 0]
- if there are 2 chars with same # of repetitions, return the char
that appears first in the string
- if the input is anything other than a string, return ["", 0]

Examples:

longestRepetition("aaaabb"))//      ["a", 4]
- 'a' appears 4 times consecutively and 'b' only twice

longestRepetition("bbbaaabaaaa"))// ["a", 4]
- 'b' and 'a' both appear three times in a row, then 'a' appears 4 times

longestRepetition("ba"))//          ["b", 1]
- 'b' and 'a' both appear once, but 'b' appears first

longestRepetition(""))//            ["", 0]
- empty string input

longestRepetition(['aabbbccbb']))//          ["", 0]
- input is not a string



longestRepetition("bbbaaabaaaa")
- string.slice(0, 3) -> 'bbb'
- string.slice(3, 6) -> 'aaa'
- string.slice(6, 7) -> 'b'
- string.slice(7, 11) -> 'aaaa'

- ['bbb', 'aaa', 'b', 'aaaa']
- ['a', 4]

Algorithm:


*/

function longestRepetition(chars) {
  if (!chars) return ['', 0];

  let charArray = chars.split('');
  let repetitions = [];
  let end = 1;

  while (charArray.length > 0) {
    let count = 1;

    while (charArray[0] === charArray[count]) {
      count += 1;
    }

    repetitions.push(charArray.splice(0, count).join(''));
  }

  let charRepeated;
  let longestLength = 0;

  for (let i = 0; i < repetitions.length; i += 1) {
    if (repetitions[i].length > longestLength) {
      longestLength = repetitions[i].length;
      charRepeated = repetitions[i][0];
    }
  }

  return [charRepeated, longestLength];
}

// first while loop: count = 1

// 2nd while loop
// charArray[0] === charArray[1] -> 'b' === 'b'
// count = 2
// charArray[0] === charArray[2] -> 'b' === 'b'
// count = 3

// charArray -> ['b', 'b', 'b', 'a', 'a', 'a', 'b', 'a', 'a', 'a', 'a']
// repetitions.push(charArray.splice(0, 3))
// charArray = [ 'a', 'a', 'a', 'b', 'a', 'a', 'a', 'a']
// repetitions = [['b', 'b', 'b']]

// first While loop: count = 1

// 2nd while loop
// charArray[0] === charArray[1] -> 'a' === 'a'
// count = 2
// charArray[0] === charArray[2] -> 'a' === 'a'
// count = 3

// charArray -> ['a', 'a', 'a', 'b', 'a', 'a', 'a', 'a']
// repetitions.push(charArray.splice(0, 3))
// charArray = [ b', 'a', 'a', 'a', 'a']
// repetitions = [['b', 'b', 'b'], ['a', 'a', 'a']]

// first while loop: count = 1

// 2nd while loop
// charArray[0] === charArray[1] -> 'b' === 'a' -> false!

// charArray -> [ b', 'a', 'a', 'a', 'a']
// repetitions.push(charArray.splice(0, 1))
// repetitions = [['b', 'b', 'b'], ['a', 'a', 'a'], ['b']]

console.log(longestRepetition("aaaabb"))//      ["a",4]
console.log(longestRepetition("bbbaaabaaaa"))// ["a",4]
console.log(longestRepetition("cbdeuuu900"))//  ["u",3]
console.log(longestRepetition("abbbbb"))//      ["b",5]
console.log(longestRepetition("aabb"))//        ["a",2]
console.log(longestRepetition(""))//            ["", 0]
console.log(longestRepetition("ba"))//          ["b",1]