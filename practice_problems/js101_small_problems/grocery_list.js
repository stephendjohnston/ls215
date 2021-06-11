"use strict";

function buyFruit(list) {
  let result = [];

  list.forEach(item => {
    for (let i = 0; i < item[1]; i += 1) {
      result.push(item[0]);
    }
  });

  return result;
}

// Using reduce

function buyFruit(list) {
  return list.reduce((fruit, item) => {
    return fruit.concat(Array(item[1]).fill(item[0]));
  }, []);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]