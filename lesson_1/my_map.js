function myMap(array, func) {
  let result = [];
  array.forEach(element => result.push(func(element)));
  return result;
}

let plusOne = n => n + 1;
myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]