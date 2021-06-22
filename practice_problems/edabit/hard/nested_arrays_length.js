"use strict";

function getLength(array) {
  return array.flat(Infinity).length;
}

console.log(getLength([1, [2,3]]))                   // 3
console.log(getLength([1, [2, [3, 4]]]))             // 4
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]))   // 6
console.log(getLength([1, 7, 8]))                    // 3
console.log(getLength([2]))                          // 1
console.log(getLength([2, [3], 4, [7]]))             // 4
console.log(getLength([2, [3, [5, 7]], 4, [7]]))     // 6
console.log(getLength([2, [3, [4, [5]]], [9]]))      // 5
console.log(getLength([]))                           // 0