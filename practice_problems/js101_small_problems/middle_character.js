"use strict";

// to get the middle index of a string:
// get the length of the string
// if the length is an even number, we must get the 2 middle indices
  // eg. 6 / 2 = 3 => index 3 and index 3 - 1 will be the middle
// if the length is an odd number, we must get the middle index
  // 5 / 2 = 2.5 => floored to 2 => middle index === 2
// 

function centerOf(string) {
  let stringLength = string.length;
  let center = Math.floor(stringLength / 2);

  if (stringLength % 2 === 1) {
    return string[center];
  } else {
    return string.slice(center - 1, center + 1);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
centerOf('Where is the middle?'); // "th" 