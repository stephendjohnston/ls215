"use strict";

function countNumberOfOccurrences(obj) {
  const result = {};

  Object.values(obj).forEach(adjective => {
    result[adjective] = (result[adjective] || 0) + 1;
  });

  return result
}

// OR

function countNumberOfOccurrences(obj) {
  return Object.values(obj).reduce((object, adj) => {
    object[adj] = (object[adj] || 0) + 1;
    return object;
  }, {});
}

const obj = { a: "moron", b: "scumbag", c: "moron", d: "idiot", e: "idiot" }
const obj2 = { a: "pig", b: "pig", c: "pig" }
const obj3 = { a: "sleazball", b: "pervert", c: "pervert", d: "pervert" }

console.log(countNumberOfOccurrences(obj));         // { moron: 2, scumbag: 1, idiot:2 }
console.log(countNumberOfOccurrences(obj2));        // { pig: 3 }
console.log(countNumberOfOccurrences(obj3));        // { sleazball: 1, pervert: 3 }
console.log(countNumberOfOccurrences(obj3).pervert) // 3