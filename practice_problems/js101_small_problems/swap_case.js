"use strict";

/*
split the string into array of chars
map over array
for each char,
- if char === char.toUpperCase()
  - return char.toLowerCase()
else if char === char.toLowerCase()
  - return char.toUpperCase()
- else
  - return char

*/

function swapCase(string) {
  return [...string]
    .map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else if (char === char.toLowerCase()) {
        return char.toUpperCase();
      } else {
        return char;
      }
    })
    .join('');
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"