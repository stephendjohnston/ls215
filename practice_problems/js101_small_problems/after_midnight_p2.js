"use strict";

const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;

// function afterMidnight(timeStr) {
//   let [hoursStr, minsStr] = timeStr.split(':');

//   let minutes = (Number(hoursStr) * MINUTES_PER_HOUR) + Number(minsStr);
//   if (minutes === MINUTES_PER_DAY) {
//     minutes -= MINUTES_PER_DAY;
//   }

//   return minutes;
// }

// function beforeMidnight(timeStr) {
//   let minutes = afterMidnight(timeStr);
//   if (minutes > 0) {
//     return MINUTES_PER_DAY - minutes;
//   } else {
//     return minutes;
//   }
// }

// LS Solution

// const HOURS_PER_DAY = 24;
// const MINUTES_PER_HOUR = 60;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   let [hours, minutes] = timeStr.split(":").map(num => Number(num));
//   return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
// }

// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }
//   return deltaMinutes;
// }

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

// Using Date Object

function afterMidnight(timeStr) {
  let date = new Date(`January 1, 2021 ${timeStr}`);
  let deltaMinutes = (date.getHours() * MINUTES_PER_HOUR) + date.getMinutes(); 
  return deltaMinutes;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);

  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}