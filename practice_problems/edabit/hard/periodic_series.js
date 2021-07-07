"use strict";

// A Periodic Series
// -----------------

/*
Problem:

This challenge involves a series that can start with any string of digits. 
The next term in the series is found by adding the digits of the previous 
term, appending that sum to the previous term, and then truncating the 
leftmost digits so that the number of digits in the terms is always the same.

Let's start with "1234". The sum of the digits is 10. Appending gives us 
"123410", then truncating the left two digits results in "3410". The next 
three terms are "4108", "0813", "1312". The series becomes periodic when a 
term that previously appeared occurs again.

Example:

"124", "247", "713", "311", "115", "157", "713", "311" ...
This series becomes periodic at a length of 6 before "713" reappears.

Create a function whose argument is a digit string (the first term) and returns 
the length of the series when it first becomes periodic.

Examples:

periodic("1") ➞ 1

periodic("3061") ➞ 7
Length of Series is 4
  - sum of 3061 = 10, so 306110, truncate leftmost digits so length === 4
  => 6110
  - sum of 6110 = 8 => 61108 => 1108
  - sum of 1108 = 10 => 110810 => 0810
  - sum of 0810 = 9 => 08109 => 8109
  - sum of 8109 = 18 => 810918 => 0918
  - sum of 0918 = 18 => 091818 => 1818
  - sum of 1818 = 18 => 181818 => 1818 // same as last series

Data Structure: 

Array:
  - to hold each new series
  - to get sum of each series to append to series to get new series
Number:
  - length of series
  - length of new series
  - newseries length - current series length = number of digits to truncate

Mental Model:

Create a count variable. 
Create an array to keep track of the series numbers. Create a do while loop that
will loop while the series is not included in the array of series.
Push the first series to the array of series.
Get the sum of the current series. Concat that sum to the series. 
Subtract the new series length by original series length. This value will 
give the number at which to slice the new series at, truncating the left most 
digits. increment count by 1.

Algorithm:

Create count variable
Create array to keep track of series
create do while loop
  - add the current series to the array
  Get New series
    - split the string into array of digit chars
    - map to numbers
    - reduce to sum
    - convert to string
  - concat sum to current series to get new series
  - subtract new series length by old series length to get slice value
  - slice new series at slice value and set to current series
*/

function periodic(series) {
  const seriesTracker = [];
  let count = 0;

  do {
    seriesTracker.push(series);
    let temp = [...series].map(Number).reduce((acc, val) => acc + val, 0);
    temp = series + String(temp);
    let sliceValue = temp.length - series.length;
    series = temp.slice(sliceValue);
    count += 1;
  } while (!seriesTracker.includes(series))

  return count;
}

console.log(periodic("2") === 1);
console.log(periodic("22") === 13);
console.log(periodic("157") === 4);
console.log(periodic("1234567") === 943);
console.log(periodic("1818") === 1);
console.log(periodic("0000001") === 778);