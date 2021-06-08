"use strict";

function doubleConsonants(string) {
  console.log(string.replace(/([^aeiou0-9 ,.!_-])/g, '$1$1'));
}

// brute force

function doubleConsonants(string) {
  let consonants = 'bcdfghjklmnpqrstvwxyz';
  let result = [];

  for (let i = 0; i < string.length; i += 1) {
    if (consonants.includes(string[i].toLowerCase())) {
      result.push(string[i], string[i]);
    } else {
      result.push(string[i]);
    }
  }

  return result.join('')
}

// Using map

function doubleConsonants(string) {
  let consonants = 'bcdfghjklmnpqrstvwxyz';

  let result = [...string].map(char => {
    if (consonants.includes(char.toLowerCase())) {
      return char.repeat(2);
    } else {
      return char;
    }
  });

  return result.join('');  
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""