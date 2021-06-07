"use strict";

function multiplyList(arr1, arr2) {
  let list = [];

  for (let i = 0; i < arr1.length; i += 1) {
    list.push(arr1[i] * arr2[i]);
  }

  return list;
}

// Using reduce

function multiplyList(arr1, arr2) {
  return arr1.reduce((acc, el, idx) => {
    return acc.concat(el * arr2[idx]);
  }, []);
}

// Using map

function multiplyList(numbers1, numbers2) {
  return numbers1.map((num, idx) => num * numbers2[idx]);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]