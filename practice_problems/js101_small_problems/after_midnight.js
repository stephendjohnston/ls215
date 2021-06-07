"use strict";

/*
input: integer
  - pos or neg
output: string
  - "hh:mm" 24 hour format

rules:
  - if number is positive, this is the number of minutes after midnight
  - if the number is negative, number is minutes before midnight
  - cannot use Date object
  - use 24 hour format for return string
  - 1440 minutes in a day
  - 60 minutes in an hour

35 => 35 + 0 => '00:35'
3000 => 3000 > 1440 => 3000 - 1440 => 1560 > 1440 => 1560 - 1440 => 120 => 2 hours => '02:00'
  
Data Structure:
  - number for math
  - string for output

Algorithm:
if the number of minutes is greater than the number of minutes in a day(1440)
subtract 1440 from the number until the number is less than 1440
- take the number that is less than or equal to 1440 and divide by 60
  - if we get a decimal, the integer will be the hours and the decimal * 60
  rounded to the nearest whole number will be the minutes
- return the hours and minutes as a string
  - pad the number with zeros if the hours or minutes is a single digit

let 
*/
const MINUTES_PER_DAY = 1440;
const MINUTES_PER_HOUR = 60;

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    return beforeMidnight(deltaMinutes);
  } else {
    return afterMidnight(deltaMinutes);
  }
}

function beforeMidnight(minutes) {
  while (minutes <= -MINUTES_PER_DAY) {
    minutes += MINUTES_PER_DAY;
  }

  return afterMidnight(MINUTES_PER_DAY + minutes);
}

function afterMidnight(minutes) {
  while (minutes >= MINUTES_PER_DAY) {
    minutes -= MINUTES_PER_DAY;
  }

  let hoursAndMinutes = minutes / MINUTES_PER_HOUR;
  let hours = Math.floor(hoursAndMinutes);
  let mins = Math.round((hoursAndMinutes - hours) * MINUTES_PER_HOUR);

  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

// LS SOLUTION

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

// Using Date Object
/*
Suppose you also needed to consider the day of week? (Assume that 
deltaMinutes is the number of minutes before or after midnight between 
Saturday and Sunday; in such a method, a deltaMinutes value of -4231 
would need to produce a return value of Thursday 01:29.)


*/
const MILLISECONDS_PER_DAY = 86400;

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let today = new Date();
  console.log(today);

}

// console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
