"use strict";

// Edabit > Hard > Positive Dominant

function isPositiveDominant(array) {
  const positives = [];
  const negatives = [];
  
  array.forEach(num => {
    if (num > 0 && !positives.includes(num)) {
      positives.push(num);
    } else if (num < 0 && !negatives.includes(num)) {
      negatives.push(num);
    }
  });
  
  return positives.length > negatives.length;
}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]))// false)
console.log(isPositiveDominant([5, 99, 832, -3, -4]))// true)
console.log(isPositiveDominant([5, 0]))// true)
console.log(isPositiveDominant([0, -4, -1]))// false)
console.log(isPositiveDominant([1, 2, 3, -1]))// true)
console.log(isPositiveDominant([1, 0, 0, -1]))// false)
console.log(isPositiveDominant([5, 4, 3, 0, 0, -1, -1, -2, -2])) //true
console.log(isPositiveDominant([52, 52, 52, -3, 2, 2, 2, -4])) // false)
console.log(isPositiveDominant([3, 3, 3, 3, -1, -1, -1])) // false)