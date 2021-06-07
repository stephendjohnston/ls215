"use strict";

/*
inputs: number (floating point) between 0 and 360
outputs: string representing number in degrees, mins, and seconds.

rules:
  - degree symbol to represent degrees
  - single quote to represent minutes
  - double quote to represent seconds
  - 60 mins in a degree
  - 60 seconds in a minute

Examples:

30 => 30°00'00"
76 => 76°43'48"
254.6 => 254°35'59"

Data Structure:

numbers
string

Algorithm:

how to extract degrees, mins and seconds?
- if the input is a whole number, the output will be that number in degrees and
0's for the mins and seconds
- for floating point numbers(decimals): subtract the integer of the input from
the entire input to get the decimals. Mulitply the decimals by 60. This number
will be the minutes. If it is a decimal, repeat the step above and get the 
decimal and multiply it by 60 to get the seconds
*/

const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const DEGREE = '\xB0';

function dms(degreesFloat) {
  let validDegreesFloat = makeDegreesValid(degreesFloat);

  let degrees = Math.floor(validDegreesFloat);
  let minutesFloat = (validDegreesFloat - degrees) * MINUTES_PER_DEGREE;
  let minutes = Math.floor(minutesFloat);
  let seconds = Math.floor((minutesFloat - minutes) * SECONDS_PER_MINUTE);

  return String(degrees) + DEGREE + String(minutes).padStart(2, '0') + "'" +
                                    String(seconds).padStart(2, '0') + '"';
}

function makeDegreesValid(degreesFloat) {
  while (degreesFloat < 0 || degreesFloat > 360) {
    if (degreesFloat < -360 || degreesFloat > 360) {
      degreesFloat = Math.abs(degreesFloat) - 360;
    } else if (degreesFloat < 0) {
      degreesFloat = degreesFloat + 360;
    }
  }

  return degreesFloat;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

// Can you refactor it so that it works with any positive or negative number?

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 60°00'00"
dms(-1080) // 360°00'00"
dms(-400)  // 40°00'00"