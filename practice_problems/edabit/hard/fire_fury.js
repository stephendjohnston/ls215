"use strict";

/*
The President's phone is broken

He is not very happy.

The only letters still working are uppercase E, F, I, R, U, Y.

An angry tweet is sent to the department responsible for presidential phone maintenance.

Kata Task

Decipher the tweet by looking for words with known meanings.

FIRE = "You are fired!"
FURY = "I am furious."
If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."

Notes

- The tweet reads left-to-right.
- Any letters not spelling words FIRE or FURY are just ignored
- If multiple of the same words are found in a row then plural rules apply:
FIRE x 1 = "You are fired!"
FIRE x 2 = "You and you are fired!"
FIRE x 3 = "You and you and you are fired!"

FURY x 1 = "I am furious."
FURY x 2 = "I am really furious."
FURY x 3 = "I am really really furious."

Examples

ex1. FURYYYFIREYYFIRE = "I am furious. You and you are fired!"
ex2. FIREYYFURYYFURYYFURRYFIRE = "You are fired! I am really furious. You are fired!"
ex3. FYRYFIRUFIRUFURE = "Fake tweet."


PEDAC:
------

inputs: String
- always given a string
- always uppercase chars

outputs: String
- dependant on the input and the number of times each keyword is found
- 'Fake tweet.' if no valid keywords are found

Rules:
- input will always be a string
- all chars will be uppercase
- all alpha chars
- looking for key words 'FIRE' and 'FURY'
- for each keyword, order matters
  - so if FIRE is found first, then FURY, the string for FIRE comes first then for FURY
- if no keywords are found, return 'Fake Tweet'

For the String ouput:
FIRE
if the count is 1: "You are fired!"
count 2: "You and you are fired!"

first part: You
middle part: 'and you'
last part: 'are fired'

FURY:
first part: 'I am'
middle part: 'really'
last part: 'furious'

Examples:
fireAndFury("FURYYYFIREYYFIRE") //, "I am furious. You and you are fired!")
- FURY count is 1: 
- FIRE count is 2: 

fireAndFury("FIREYYFURYYFURYYFURRYFIRE") //, "You are fired! I am really furious. You are fired!"

"FIREYYFURYYFURYYFURRYFIRE"
[[FIRE] , [FURY, FURY, FURY], [FIRE]]

[FIRE , FURY, FURY, FURY, FIRE]

'You are fired! I am really really furious. You are fired!'

fireAndFury("FYRYFIRUFIRUFURE"), "Fake tweet."

Mental Model:

Iterate over the string and find the occurrences of the keywords. If there are no keywords found, return "Fake tweet". Check every for characters for a keyword. When a keyword is found, add that key word to an array. We should then have an array of all they keywords in the order that they were found. We then have to find the consecutive count of each keyword, so that we can return the appropriate string for each selection of keywords.

algorithm:
- to look for keywords:
  - filter over array of chars
  - on each iteration, slice from current index to index + 4
    - join this array of chars
    - check if string === keyword
    - return true if it does
- while keywords array length > 0
  - create a subarray
  - shift out the first word for comparison
  - while comparison === keywords[0]
    - shift out the first word and push it to the subarray
  - push subarray to result array

First Solution was completed during a live coidng session in about 45 mins.
*/

function fireAndFury(tweet) {
  let fire = 'FIRE';
  let fury = 'FURY';
  let keyWords = [];
  
  for (let i = 0; i < tweet.length; i += 1) {
    let word = tweet.slice(i, i + 4);
    if (word === fire || word === fury) {
      keyWords.push(word)
    }
  }
  
  if (keyWords.length === 0) return 'Fake Tweet.'
  
  let result = [];
  while (keyWords.length > 0) {
    let subarray = [];
    let compareWord = keyWords.shift();
    subarray.push(compareWord);
    
    while (compareWord === keyWords[0]) {
      subarray.push(keyWords.shift());
    }
    
    result.push(subarray);
  }
  
  result = result.map(subarray => {
    if (subarray[0] === fire) {
      return createFireString(subarray);
    } else {
      return createFuryString(subarray);
    }
  })
  
  return result.join(' ')
}

function createFuryString(array) {
  let first = 'I am ';
  let middle = 'really '.repeat(array.length - 1);
  let last = 'furious.';
  
  return first + middle + last;
}

function createFireString(array) {
  let first = 'You '
  let middle = 'and you '.repeat(array.length - 1)
  let last = 'are fired!';
  
  return first + middle + last;
}

// Refactored Code

function fireAndFury(tweet) {
  const FIRE = 'FIRE';
  const FURY = 'FURY';
  let keyWords = tweet.match(/(FIRE|FURY)/g) || [];
  
  if (keyWords.length === 0 || ![...tweet].every(c => (FIRE + FURY).includes(c))) {
    return 'Fake Tweet.'
  }
  
  let result = [];
  while (keyWords.length > 0) {
    let subarray = [];
    let compareWord = keyWords.shift();
    subarray.push(compareWord);
    
    while (compareWord === keyWords[0]) {
      subarray.push(keyWords.shift());
    }
    
    result.push(subarray);
  }

  return result.map(subarray => {
    let wordCount = subarray.length;
    if (subarray[0] === FIRE) {
      return createFireString(wordCount);
    } else {
      return createFuryString(wordCount);
    }
  }).join(' ');
}

function createFuryString(wordCount) {
  return 'I am ' + 'really '.repeat(wordCount - 1) + 'furious.';
}

function createFireString(wordCount) {
  return 'You ' + 'and you '.repeat(wordCount - 1) + 'are fired!';
}

console.log(fireAndFury("FURYYYFIREYYFIRE")) //, "I am furious. You and you are fired!")
console.log(fireAndFury("FIREYYFURYYFURYYFURRYFIRE")) //, "You are fired! I am really furious. You are fired!"
console.log(fireAndFury("FYRYFIRUFIRUFURE"))//, "Fake tweet."
console.log(fireAndFury("FIREYYFURYZZFIRE")) //Fake tweet.