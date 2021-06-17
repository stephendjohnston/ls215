"use strict";

// Unlucky Days
// ------------

/*
Problem:
Write a function that takes a year as an argument and returns the number of 
'Friday the 13ths' in that year. 

Input: Number
  - year
Output: Number
  - of fridays that fall on the 13th of a month in that year

Rules:
- assume that the year is greater than 1752

Mental Model:
Take the year input and determine how many fridays in that year occurred
on the 13th of any month.

Example:

fridayThe13ths(2015);      // 3
- start from Jan 1 2015 and check all fridays up until dec 31 2015


Data Structure:
Date Object

Algorithm:

Create a start date that represents the 13th day of the year input
create a count variable that will start at 0.
 - iterate 12 times, once for each of the 12 months in a year
  - on each iteration check if 13th of the month is a friday
    - if it is, increment the count by 1
  - after each check, change the date to the 13th of the next month
- return the count
*/

function fridayThe13ths(year) {
  let date = new Date(`Jan 13 ${year}`);
  let count = 0;

  for (let month = 1; month <= 12; month += 1) {
    if (date.getDay() === 5) {
      count += 1;
    }

    date.setMonth(month);
  }

  return count;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2