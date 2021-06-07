"use strict";

function wordSizes(string) {
  let result = {};

  string.split(' ').forEach( word => {
    result[word.length] = (result[word.length] || 0) + 1;
  });

  return result;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

// Part 2
// Modify function to exclude non-letters when determining word size. 
// For instance, the word size of "it's" is 3, not 4.

function wordSizes(string) {
  if (!string) return {};
  let result = {};
  string = string.replace(/[^a-z ]/gi, '');
  
  string.split(' ').forEach( word => {
    result[word.length] = (result[word.length] || 0) + 1;
  });

  console.log(result);
  return result;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}