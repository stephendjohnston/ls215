"use strict";

function interleave(array1, array2) {
  let combined = [];

  for (let i = 0; i < array1.length; i += 1) {
    combined.push(array1[i], array2[i]);
  }

  return combined;
}

// Using forEach

function interleave(array1, array2) {
  let combined = [];

  array1.forEach((element, idx) => combined.push(element, array2[idx]));
  return combined;
}

// Using map and flatMap which avoids the use of flat() tacked onto map();

function interleave(array1, array2) {
  return array1.map((el, idx) => [el, array2[idx]]).flat();
}

function interleave(array1, array2) {
  return array1.flatMap((el, idx) => [el, array2[idx]]);
}

// Using reduce

function interleave(array1, array2) {
  return array1.reduce((acc, val, idx) => {
    return acc.concat(val, array2[idx]);
  }, []);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]