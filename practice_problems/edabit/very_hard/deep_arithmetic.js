"use strict";

function sum(array) {
  return array.flat(Infinity)
              .filter(stringsWithNumbers)
              .map(extractNumbers)
              .flat()
              .reduce((acc, strNum) => acc + parseInt(strNum), 0);
}

function stringsWithNumbers(str) {
  return str.match(/[0-9]/g);
}

function extractNumbers(str) {
  return str.match(/-?[0-9]+/g); 
}

console.log(sum(["1", "five", "2wenty-one", "thr33"]))// 36
console.log(sum([["1X2", "t3n"],["1024", "5", "64"]]))// 1099
console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]))// 759
console.log(sum([[["0", "0x2", "z3r1"],["1", "55a46"]],[["1", "0b2", "4"],["0x5fp-2", "nine", "09"],["4", "4", "4"]],[["03"]], []]))// 142
console.log(sum([[[[[[[[[[[[[[[["-1", "1"], ["3"], [""], []]]]]]]]]]]]]]]]))// 3
console.log(sum([[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]))// 0
console.log(sum([[[[[["-32-64", "a-zA-Z"], ["01-1"]]]]]]))// -96