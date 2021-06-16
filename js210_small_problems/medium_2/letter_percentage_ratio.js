"use strict";

// Letter Percentage Ratio
// -----------------------

/*
Problem:

Write a function that takes a string and returns an object containing the 
following three properties:

  - the percentage of characters in the string that are lowercase letters
  - the percentage of characters that are uppercase letters
  - the percentage of characters that are neither

You may assume that the string will always contain at least one character.

Inputs: String
  - contains: word chars and numbers
Output: Object
  - percentage of lowercase chars
  - percentage of uppercase chars
  - percentage of chars that are neither

Rules:
- the string will always contain at least one character
- the percentage value is a String number that is rounded to 2 decimals
- if there are no chars of a certain type, the value will be "0.00"

Mental model:
take a string and parse out the number of chars that fit into each category
represented above. Divide the number of each type of char by the total number
of chars in the input string and multiply by 100 to get the percentage.
Store each percentage as a string in the object as the value for the
appropriate key.

Example:
letterPercentages('abCdef 123');
 { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
- there are 5 lowercase letters out of 10 total chars = 5/10 * 100 = "50.00"
- there are 1 uppercase letters out of 10 = 1/10 * 100 = "10.00"
- there are 4 neither letters out of 10 = 4/10 * 100 = "40.00"

Data Structure:
Object: return value
String: The value for each key in the object
Number: to calculate the percentage of each type of char

Algorithm:
create a counter for each type of char
iterate over the string of chars
  - if a char is lowercase
    - increase lowercase counter by 1
  - else if char is uppercase
    - increase upcase counter by 1
  - else
    - increase neither counter by 1
- calculate the percentage for each type of char
  - divide the count by the string length and round to 2 decimals
- return an object with each percentage as a string for each type of
char
*/

function letterPercentages(string) {
  const percentages = { lowercase: 0, uppercase: 0, neither: 0 }

  string.split('').forEach(char => {
    if (/[a-z]/.test(char)) {
      percentages.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      percentages.uppercase += 1;
    } else {
      percentages.neither += 1;
    }
  });

  Object.keys(percentages).forEach(type => {
    percentages[type] = getStringPercentage(percentages[type], string.length);
  });

  return percentages;
}

function getStringPercentage(count, length) {
  return ((count / length) * 100).toFixed(2);
} 

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }