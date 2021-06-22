"use strict";

/*
return the function name as a string, that returns the larger number
*/

function whichIsLarger(f, g) {
  if (f() > g()) {
    return 'f';
  } else if (g() > f()) {
    return 'g';
  } else {
    return 'neither';
  }
}

whichIsLarger(() => 5, () => 10) // ➞ "g"
whichIsLarger(() => 25,  () => 25) // ➞ "neither"
whichIsLarger(() => 505050, () => 5050) // ➞ "f"