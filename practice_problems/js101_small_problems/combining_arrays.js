"use strict";

/*
explanation:
[...arrays] => [[1, 3, 5], [3, 6, 9]]
flat() => [1, 3, 5, 3, 6, 9]
reduce =>
  if acc does not have the current value in it's array, then it adds the value
  to acc and returns
  if acc does have the current value, then we just return acc
*/

function union(...arrays) {
  return [...arrays].flat().reduce((acc, val) => {
    if (acc.indexOf(val) === -1) {
      return acc.concat(val);
    }
    return acc;
  }, []);
}

// OR

function union(array1, array2) {
  let combinedArray = array1.concat(array2);
  let result = [];

  combinedArray.forEach( num => {
    if (!result.includes(num)) {
      result.push(num);
    }
  });

  return result;
}

// OR

function union(array1, array2) {
  for (let i = 0; i < array2.length; i += 1) {
    if (array1.includes(array2[i])) continue;
    array1.push(array2[i]);
  }

  return array1;
}

// LS

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
                  if (!resultArray.includes(value)) {
                    resultArray.push(value);
                  }
                });
}

function union(...args) {
  const newArray = [];

  args.forEach(value => copyNonDupsTo(newArray, value));

  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]