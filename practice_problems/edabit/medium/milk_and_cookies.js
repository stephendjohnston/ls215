"use strict";

function timeForMilkAndCookies(date) {
  return date.getDate() === 24 && date.getMonth() === 11;
}

timeForMilkAndCookies(new Date(2013, 11, 24)) // ➞ true
timeForMilkAndCookies(new Date(2013, 0, 23))  // ➞ false
timeForMilkAndCookies(new Date(3000, 11, 24)) // ➞ true