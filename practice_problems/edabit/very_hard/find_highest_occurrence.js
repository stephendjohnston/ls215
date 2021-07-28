"use strict";

// Find Highest Occurrence
// -----------------------

/*
Problem:

Create a function that takes an array, finds the most repeated element(s) 
within it and returns it/them in an array (order not important). The 
function should work for both integers and strings mixed together within 
the input array (e.g. [1, 1, "a"]).

Examples:

highestOccurrence([2, 3, 2, 5, 6, 7, 2]) ➞ [2]

highestOccurrence([1, 2, 3, 3, "a", "b", "b", "c"]) ➞ [3, "b"]

highestOccurrence(["it", "keeps", "coding", "on", "or", "it", "gets", "the", "hose"]) ➞ ["it"]

Notes:
- If there is a tie for highest occurrence, return both (see second example 
above).
- Don't let integers become strings and/or string become integers in the 
result.
- NaN counts as a number.


PEDAC
-----

Inputs: Array
  - contains: numbers or strings
Outputs: Array
  - contains values from input that occur the most amount of times

Rules:
- Return an array of the element that occurs the highest number of times in
the input
  - return multiple elements if there is a tie for occurrence
- the input will contain strings and numbers
- NaN is included as a number

Examples:
highestOccurrence([2, 3, 2, 5, 6, 7, 2]) ➞ [2]
-> 2 occurs three times

highestOccurrence([1, 2, 3, 3, "a", "b", "b", "c"]) ➞ [3, "b"]
-> 3 and 'b' occur twice while all other elements occur once

Mental Model:

create an object literal to hold the counts of each element. Iterate
over the input array. For each element, create a property with that element
as the key and the number of times it occurs as a number. Get an array of
the values of the object. Get the max value from that array. Iterate over
keys of the object, and for whatever keys have a value equal to the max, 
add that key to a result array.

Algorithm:

- create object literal called counts
- use forEach to iterate over input array
  - for each element, add that element as a key, and a count of the number
  of times that element occurs as a value
    - count[element] = (count[element] || 0) + 1;
- get an array of the values
  - Object.values(counts)
- get the max value of the values
  - Math.max(...values)
- get the keys of the object
  - Object.keys(counts)
- filter over the keys and select every key that has a value equal to the
max value
  - counts[key] === maxValue
- return the filtered array

*/

function highestOccurrence(array) {
  const counts = {};

  array.forEach(element => {
    counts[element] = (counts[element] || 0) + 1;
  });

  let occurrences = Object.values(counts);
  let maxOccurrence = Math.max(...occurrences);

  return Object.keys(counts).filter(key => {
    return counts[key] === maxOccurrence;
  });
}

console.log(highestOccurrence(["a"]))// ["a"],"strings should work with this function");
console.log(highestOccurrence(["a","a"]))// ["a"]);
console.log(highestOccurrence(["a","a","b"]))// ["a"]);
console.log(highestOccurrence(["a","a","b"]))// ["a"]);
console.log(highestOccurrence(["a","a","b","b"].sort()))// ["a","b"].sort(),"if there is a tie for highest occurrence, both should be returned in the array");
console.log(highestOccurrence([1,"a","b","b"]))// ["b"],"numbers should be returned as numbers");
console.log(highestOccurrence([NaN,"a","b","b"]))// ["b"],"NaN is a number too - and a relative");
console.log(highestOccurrence([1,2,2,3,3,3,4,4,4,4]))// [4]);
console.log(highestOccurrence(["ab","ab","b"]))// ["ab"]);
console.log(highestOccurrence(["ab","ab","b","bb","b"].sort()))// ["b","ab"].sort());
console.log(highestOccurrence(["3a","2a","3a"]))//["3a"],"this is a cruel one, make sure that parseInt doesn't affect strings that start with digits");
console.log(highestOccurrence([3,3,3,4,4,4,4,2,3,6,7,6,7,6,7,6,"a","a","a","a"].sort()))// [3,4,6,"a"].sort());
console.log(highestOccurrence(["ab","ab","b","bb","b"].sort()))// ["b","ab"].sort());
console.log(highestOccurrence([0,1]).sort())// [0,1].sort(),"there is a zero problem in your solution, perhaps there is a statement taking zero as a falsey value");
