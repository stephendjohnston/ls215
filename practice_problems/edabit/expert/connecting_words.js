"use strict";

// Connecting Words
// ----------------

/*
Problem:
--------

Write a function that connects each previous word to the next word by the 
shared letters. Return the resulting string (removing duplicate characters 
in the overlap) and the minimum number of shared letters across all pairs 
of strings.

Examples
join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

join(["move", "over", "very"]) ➞ ["movery", 3]

join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]

"to" and "ops" share "o" (1)
"ops" and "psy" share "ps" (2)
"psy" and "syllable" share "sy" (2)
the minimum overlap is 1

join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]

Notes:
------

More specifically, look at the overlap between the previous words ending 
letters and the next word's beginning letters.

PEDAC
-----

Inputs: array of strings
Outputs: Array of 2 elements
  - first element is string
  - second element is integer

Rules:
- return an array
  - first element is the joined string
  - second element is a number representing the min number of overlap that
  occurred between consecutive strings
- when joining two strings, join the words where the previous word letters
overlap with the next words letters
-eg. 'oven' and 'envier' => overlaps at 'en' to become => 'ovenvier'
  - if there is no overlaps, join the whole string
- the last word in the input array will always have all of it's letters
included in the output because there is no string following it to overlap

Example:

join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

- 'oven' and 'envier'
  - first check 'oven' in 'envi'
  - 'ven' in 'env'
  - 'en' in 'en' MATCH!
  slice off end of 'oven' to 'ov' and join


Data Structure:
Array
  - use map to transform each word
  - after transformation, join the array

String
  - compare string with next string

Mental Model:

Iterate over the array of words using map to transform each word based on
its overlap with word following it. For each word, compare the whole word
with the first letters of the next word. If there is no match, check the
word from index 1 to the end against the same number of letters of the
next word and continue the process until a match is found, or you reach
the end of the string with no match. If there is no match, leave the word as
is. For each match, record the number of letters that overlap and push
that number into an array. Join the string. Return the string, and the
Math.min(overlaps).

Algorithm:

- initialize overlaps array
- initialize transformed array
  - this array will contain the words that have been altered due to overlapping
- map over array of words
  - create for loop that will iterate equal to the shorter of the word
  lengths of the current word or the next word
    - on each loop, slice from the current index to the end and compare this
    with the a string of the same length starting from index 0 of the next
    word in the array.
    - if they match, return the string form index 0 up to the index
    where the match was made
      - eg. 'oven' and 'envier' will match at index 2 of 'oven'
      so return 'oven'.slice(0, 2) to get 'ov'
    - go to next word when match is made
    - if no match is made, return word as is
  - length of 'ov' is 2, so push the number 2 to the overlaps array
- join the transformed array
- return the new joined string and the min overlap
*/

function join(words) {
  const overlaps = [];

  let transformed = words.map((word, idx, arr) => {
    if (idx === arr.length - 1) return word;

    let nextWord = arr[idx + 1];
    let iterations = word.length;

    for (let i = 0; i < iterations; i += 1) {
      if (word.slice(i) === nextWord.slice(0, word.length - i)) {
        overlaps.push(word.slice(i).length);
        word = word.slice(0, i);
        return word;
      }
    }

    return word;
  });

  if (overlaps.length === 0) overlaps.push(0);
  return [transformed.join(''), Math.min(...overlaps)];
}

console.log(join(["happy", "python", "honey", "yelp", "plank", "lanky"]))// ["happythoneyelplanky", 1])
console.log(join(["move", "over", "very"]))// ["movery", 3])
console.log(join(["oven", "envier", "erase", "serious"]))// ["ovenvieraserious", 2])
console.log(join(["to", "ops", "psy", "syllable"]))// ["topsyllable", 1])
console.log(join(["aaa", "bbb", "ccc", "ddd"]))// ["aaabbbcccddd", 0])
console.log(join(["abcde", "bcdefghi", "efghi", "fghij", "ghijklmnop"]))// ["abcdefghijklmnop", 4])
console.log(join(["aab", "abcccd", "cdeeef", "effff"]))// ["aabcccdeeeffff", 2])