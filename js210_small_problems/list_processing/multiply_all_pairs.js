function multiplyAllPairs(array1, array2) {
  return array1.map(num1 => multiplier(array2, num1))
               .flat()
               .sort((a, b) => a - b);
}

function multiplier(array, value) {
  return array.map(val => val * value);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// LS Solution:

function multiplyAllPairs(array1, array2) {
  const result = [];

  array1.forEach(number1 => {
    array2.forEach(number2 => {
      result.push(number1 * number2);
    });
  });

  return result.sort((a, b) => a - b);
}