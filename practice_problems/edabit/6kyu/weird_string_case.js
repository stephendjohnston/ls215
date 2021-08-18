"use strict";

// Weird String Case
// -----------------

/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and 
returns the same string with all even indexed characters in each word upper 
cased, and all odd indexed characters in each word lower cased. The indexing 
just explained is zero based, so the zero-ith index is even, therefore that 
character should be upper cased.

The passed in string will only consist of alphabetical characters and 
spaces(' '). Spaces will only be present if there are multiple words. 
Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
-> S is uppercase cause index 0 is even
-> t is lowercase cause index 1 is odd
etc
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
-> W I D are uppercase because they are even indexed
-> e r are lowercase because they are odd indexed
-> spaces don't count and are returned as is.
-> S R N are upper case cause even indexed
-> t i g are lowercase cause odd indexed

Inputs: strings
- will only contain alpha chars and spaces
  - spaces only present for strings of multiple words
- words will be separated by single spaces
Outputs: Strings
- for each word, even indexed chars will be upper cased and odd indexed chars will be lower cased
- 0 index is even, 1 is odd etc

Mental Model:

split the string on spaces. map over the array of words. For each word, split the word into an array of chars. Map over the array of chars. If the char is at an even index, return the char uppercased.
if the char is at an odd index, return the char lowercased.
Join the the transformed words back into a string separated by spaces
*/

function toWeirdCase(string) {
  return string.split(' ').map(word => {
    return [...word].map((char, idx) => {
      if (idx % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    }).join('');
  }).join(' ');
}

console.log(toWeirdCase('This is a test')) // 'ThIs Is A TeSt'
console.log(toWeirdCase( "String" ));//=> returns "StRiNg"
console.log(toWeirdCase( "Weird string case" )) //=> returns "WeIrD StRiNg CaSe"
