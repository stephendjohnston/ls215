"use strict";

// for loop that on each iteration, checks the last char in an string
// if that last char matches the current char, move to the next char
// otherwise add it to the string
// join the string at the end

function crunch(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (result[result.length - 1] === string[i]) {
      continue;
    }

    result += string[i];
  }

  return result;
}

// OR

function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}

// OR

function crunch(text) {
  let characters = text.split('');

  return characters.filter((char, idx) => {
    return char !== characters[idx + 1];
  }).join('');
}

// OR

function crunch(text) {
  return text.replace(/(.)\1+/g, '$1');
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""