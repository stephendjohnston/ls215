"use strict";

function century(year) {
  let century = String(Math.ceil(year / 100));
  let lastTwo = century.slice(-2);

  if (lastTwo === '11' || lastTwo === '12' || lastTwo === '13') {
    return `${century}th`;
  }

  let last = lastTwo.slice(-1);
  switch (last) {
    case '1': return `${century}st`;
    case '2': return `${century}nd`;
    case '3': return `${century}rd`;
    default: return `${century}th`;
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

// OR LS solution:

function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

// OR Student Solution

function ordinalSuffix(num) {
  if ([11, 12, 13].includes(num % 100)) return 'th';

  switch (num % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function century(num) {
  let centNum = Math.ceil(num / 100);
  return `${centNum}${ordinalSuffix(centNum)}`
}

// ordinalSuffix refactored:

function ordinalSuffix(num) {
  if ([11, 12, 13].includes(num % 100)) return 'th';

  let suffIdx = (num % 10 > 3 ? 0 : num % 10);
  return ['th', 'st', 'nd', 'rd'][suffIdx];
}