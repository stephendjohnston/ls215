"use strict";

// Title Case

/*
A string is considered to be in title case if each word in the string is 
either (a) capitalised (that is, only the first letter of the word is in 
upper case) or (b) considered to be an exception and put entirely into lower 
case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an 
optional list of exceptions (minor words). The list of minor words will be 
given as a string with each word separated by a space. Your function should 
ignore the case of the minor words string -- it should behave in the same 
way even if the case of the minor word string is changed.

###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must 
always be lowercase except for the first word in the string. 
The JavaScript/CoffeeScript tests will pass undefined when this argument is 
unused.

###Examples

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

input: String, and optional second string
- the first string will be a list of words separated by spaces
- if a second string is provided, it will also contain a list of words
separated by spaces.
- if the first string is empty, return an empty string

outputs: String
- Each word in the string should be capitalized, unless that word appears
in the second string
- The first word of the string will ALWAYS be capitalized, even if it appears
in the second string


Rules:
- if the first string is an empty string or anything other than a string, 
return ''
- the second string argumnet is optional
  - if it is included, it will be a string of words separated by spaces
  - the words in this string are used to determine what words in the first
  string are NOT to be capitalized
  - this string may contain words that are not present in the first string
  - these words should be treated as case insensitive as in 'The' can
  be equal to 'the' as well as 'THE'


Examples:


*/

function titleCase(title, minorWords = '') {
  if (title === '') return title;

  const minorWordsArr = minorWords.split(' ').map(word => word.toLowerCase());

  return title.split(' ')
              .map((word, idx) => {
                word = word.toLowerCase();

                if (idx === 0) return word[0].toUpperCase() + word.slice(1);

                if (minorWordsArr.includes(word)) {
                  return word;
                }

                return word[0].toUpperCase() + word.slice(1);
              }).join(' ');
}

console.log(titleCase('a clash of KINGS', 'a an the of')) // 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) // 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')) // 'The Quick Brown Fox'
console.log(titleCase('First a of in', 'an often into')) // "First A Of In"