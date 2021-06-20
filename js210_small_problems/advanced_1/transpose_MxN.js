"use strict";

function transpose(matrix) {
  const transposed = [];

  for (let i = 0; i < matrix[0].length; i += 1) {
    transposed.push([]);
  }

  for (let subArrIdx = 0; subArrIdx < matrix.length; subArrIdx += 1) {
    let subArray = matrix[subArrIdx];
    for (let colIdx = 0; colIdx < subArray.length; colIdx += 1) {
      transposed[colIdx].push(subArray[colIdx]);
    }
  }

  return transposed;
}

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]