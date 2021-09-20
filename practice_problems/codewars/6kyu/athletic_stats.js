"use strict";

// Statistics for an Athletic Association

/*
You are the "computer expert" of a local Athletic Association (C.A.A.). 
Many teams of runners come to compete. Each time you get a string of all 
race results of every team who has run. For example here is a string showing 
the individual results of a team of 5 runners:

"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

Each part of the string is of the form: h|m|s where h, m, s 
(h for hour, m for minutes, s for seconds) are positive or null integer 
(represented as strings) with one or two digits. There are no traps in this 
format.

To compare the results of the teams you are asked for giving three 
statistics; range, average and median.

Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} 
the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

Mean or Average : To calculate mean, add together all of the numbers in a 
set and then divide the sum by the total count of numbers.

Median : In statistics, the median is the number separating the higher half 
of a data sample from the lower half. The median of a finite list of numbers 
can be found by arranging all the observations from lowest value to highest 
value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) 
when there is an odd number of observations. If there is an even number of 
observations, then there is no single middle value; the median is then 
defined to be the mean of the two middle values (the median of {3, 5, 6, 9} 
is (5 + 6) / 2 = 5.5).

Your task is to return a string giving these 3 values. For the example given 
above, the string result will be

"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`

where hh, mm, ss are integers (represented by strings) with each 2 digits.

Remarks:
--------

1. if a result in seconds is ab.xy... it will be given truncated as ab.
2. if the given string is "" you will return ""

PEDAC
-----

inputs: String
- consists of race results of individual runners
- each racer results will be separated by ", "
- each racer stats will be in the format hours|mins|secs
  - each stat will containt 1-2 digits
- these stats will be digits 0-9

output: String
- consists 3 items: Range, Average and Median
- each item will have a time format as hours|mins|secs
  - if a time only has one digit, prepend it with a 0
- the output will follow this format:
  ->  "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`

Rules:
- if the given string is "" then return ""
- Range : difference between the lowest and highest values.
- Average : The sum of all the times divided by the number of times
- Median : For an odd number of times, the time in the middle of a
sorted list of times
  - for an even number of times, the two middle numbers summed and
  divided by 2. 
- Return the Range, Average and Median as string separated by " "

Examples:

"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17" -> "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"
- Lowest Time: "01|15|59"
- Highest Time: "2|3|17"
- Range = "2|3|17" - "01|15|59" -> "00|47|18"

- for the average, convert all of the times into seconds, add them together
and divide by 5 (the count of times) then convert back to hours, mins, secs.

- for the median, when you convert times to seconds, sort the times
from lowest to highest and get the middle value. If the length of
the array is even, get to 2 middle values, add them together then divide by 2. 

Data Structures:

Numbers
  - convert the times into seconds (integers)
Array
  - hold the times as numbers

Mental Model:
Take the input string of times and separate each time into an array. Convert
each time to a number representing each time as seconds for comparison. Sort
this array of numbers from lowest to highest. To find the Range, subtract
the lowest time from the highest time. Convert the result back into "hh|mm|ss".
To find the average, sum all of the times then divide by the number of times
and convert back to "hh|mm|ss". To find the median, determine if the
list of times has an even or odd amount of times. If there is an odd number,
divide the length by 2 and round down and use that number as the index to get
the time from the list. If there is an even number, divide the length
by 2 and then use that number and that same number minus 1 to get 2 values.
Sum those 2 values and divide by 2 to get the median. 

Algorithm:

- split the string into an array of times
- map over the array of times
  - for each time, convert the string time, an integer as seconds
- create a function for returning the Range, average and median

Function for converting times to seconds
Given: "hh|mm|ss"
- split the string on "|" to get an array of 3 elements and convert
each element into a Number
- multiplt the first element by 3600
- multiply the second element by 60
- add the first second and third elements to get the total seconds

Function for converting seconds back to "hh|mm|ss"
Given an Integer representing the number of seconds
- Divide the integer by 3600
  - the hours will be the number to the left of the decimal
- subtract the hours from this number and mulitply by 60
  - mins will be the number to the left of the decimal
- subtract mins from this number and multiply by 60
  - this number will be the seconds, round to the nearest second

Function for returning the Range
- given an array of times with values as numbers representing seconds
- the array should be sorted from lowest to highest
- take the last element and subtract the first element from it
- convert this number to "hh|mm|ss" and return the string

Function for returning Average
Given an array of times with values as numbers representing seconds
- sum all the values and divide by the total number of elements
- convert this number to "hh|mm|ss"
- return the string

Function for return the Median
Given an array of times with values as numbers representing seconds
- if the length of the array is odd, the middle index will be
Math.floor(length / 2)
- use this index to get the middle number
- convert this number to "hh|mm|ss" and return

- if the length of the array is even, the middle numbers will be at index 
length / 2 and index length / 2 + 1.
- sum the values at these two indexes and divide by 2
- convert this number to "hh|mm|ss" and return
*/

const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = MINUTES_PER_HOUR * SECONDS_PER_MINUTE;

function convertToSeconds(hhmmss) {
  let timesArr = hhmmss.split('|');
  let hours = Number(timesArr[0]);
  let minutes = Number(timesArr[1]);
  let seconds = Number(timesArr[2]);

  return (SECONDS_PER_HOUR * hours) + 
         (SECONDS_PER_MINUTE * minutes) + 
         seconds;
}

function convertToHMS(seconds) {
  let tempHours = seconds / SECONDS_PER_HOUR;
  let hours = Math.floor(tempHours);
  let tempMins = (tempHours - hours) * MINUTES_PER_HOUR;
  let mins = Math.floor(tempMins) % 60;
  let secs = Math.round((tempMins - mins) * SECONDS_PER_MINUTE) % 60;
  
  
  return String(hours).padStart(2, '0') + '|' + 
         String(mins).padStart(2, '0') + '|' + 
         String(secs).padStart(2, '0');
}

function range(timesArr) {
  let highestTime = timesArr[timesArr.length - 1];
  let lowestTime = timesArr[0];
  let rangeInSeconds = highestTime - lowestTime;

  return "Range: " + convertToHMS(rangeInSeconds);
}

function average(timesArr) {
  let totalSeconds = timesArr.reduce((acc, num) => acc + num);
  let averageSeconds = Math.floor(totalSeconds / timesArr.length);

  return "Average: " + convertToHMS(averageSeconds);
}

function median(timesArr) {
  let middle = Math.floor(timesArr.length / 2);
  let medianAverage = Math.floor((timesArr[middle - 1] + timesArr[middle]) / 2);

  if (timesArr.length % 2 === 1) {
    medianAverage = timesArr[middle];
  }

  return "Median: " + convertToHMS(medianAverage);
}

function stat(string) {
  if (string === '') return '';
  let secondsArray = string.split(', ')
                           .map(convertToSeconds)
                           .sort((a , b) => a - b);

  return range(secondsArray) + ' ' + average(secondsArray) + ' ' + median(secondsArray);
}

console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"))
// "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34"
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"))
// "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00"



