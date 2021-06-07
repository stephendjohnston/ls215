"use strict";

function penultimate(string) {
  let arr = string.split(' ');
  return arr[arr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// further exploration solution

function middleWord(string) {
  let wordArray = string.split(' ');
  let hasMiddleIndex = (wordArray.length / 2) % 2 !== 0;
  
  if (wordArray.length > 2)  
    if (hasMiddleIndex) {
        return wordArray[Math.floor(wordArray.length / 2)];
      } 
  return console.log("Sorry, your string doesn't have a middle word.")
}