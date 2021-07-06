"use strict";

function actualMemorySize(size) {
  let memory = Number(size.split(/[A-Z]+/)[0]);
  let suffix = size.split(/[0-9]+/g)[1];
  let realMemorySize = memory - (memory * 0.07);

  if (realMemorySize < 1) {
    suffix = 'MB';
    realMemorySize *= 1000;
  }

  if (suffix === 'GB') {
    return realMemorySize.toFixed(2) + suffix;
  } else {
    return Math.round(realMemorySize) + suffix;
  }
}

console.log(actualMemorySize("256MB")); // "238MB"
console.log(actualMemorySize("512MB")); // "476MB"
console.log(actualMemorySize("2GB"));   // "1.86GB"
console.log(actualMemorySize("8GB"));   // "7.44GB"
console.log(actualMemorySize("16GB"));  // "14.88GB"
console.log(actualMemorySize("32GB"));  // "29.76GB"
console.log(actualMemorySize("1GB"));   // "930MB"