"use strict";

function halvsies(array) {
  let middleIndex = Math.ceil(array.length / 2);
  return [array.slice(0, middleIndex), array.slice(middleIndex)];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]