"use strict";

// Edabit > Very Hard > Majority Vote

/*
Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

Examples:

majorityVote(["A", "A", "B"]) ➞ "A"

majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"

majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null

Notes:

- The frequency of the majority element must be strictly greater than 1/2.
- If there is no majority element, return null.
- If the array is empty, return null.
*/

function majorityVote(votes) {
  let majorityPass = votes.length;
  let elementCount = {};
  
  votes.forEach(vote => {
    elementCount[vote] = (elementCount[vote] || 0) + 1;
  });
  
  let elements = Object.keys(elementCount);
  if (elements.length === 1) return elements[0];
  let elementValues = Object.values(elementCount).sort((a, b) => b - a);
  
  if (elementValues[0] === elementValues[1]) return null
  
  return elements.filter(el => elementCount[el] === elementValues[0])[0]
  
}

console.log(majorityVote(["A", "B", "B", "B", "A", "A"]))// null)
console.log(majorityVote(["B", "B", "B"]))// "B")
console.log(majorityVote(["A", "B", "B"]))// "B")
console.log(majorityVote(["A", "A", "B"]))// "A")
console.log(majorityVote(["A", "A", "A", "B", "C", "A"]))// "A")
console.log(majorityVote(["B", "A", "B", "B", "C", "A", "B", "B"]))// "B")
console.log(majorityVote(["A", "B", "B", "A", "C", "C"]))// null)
console.log(majorityVote(["A", "B"]))// null)
console.log(majorityVote(["A"]))// "A")
console.log(majorityVote([]))// null)