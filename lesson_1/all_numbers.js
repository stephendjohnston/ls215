function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

areAllNumbers([1, 5, 6, 7, '1']);             // false
areAllNumbers([1, 5, 6, 7, 1]);               // true
areAllNumbers([1, 5, 6, 7, NaN]);             // false