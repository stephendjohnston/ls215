"use strict";

// Roman Numerals Encoder

/*
Create a function taking a positive integer as its parameter and returning a 
string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately 
starting with the left most digit and skipping any digit with a value of 
zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting 
in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each 
Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'

Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

1000 - 900 = 100
900 - 500 = 400

400 > 100 so 'C'

convert to object
{ I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

OR maybe

{ 1: 'I', 5: 'V', 10: 'X', 100: 'L', 500: 'D', 1000: 'M' }

Remember that there can't be more than 3 identical symbols in a row.


inputs: Number
- positive integer
- > 0
- no decimals

outputs: String
- Roman numeral of the input integer

Examples:

solution(1000))// 'M'
- 'M' represents 1000

solution(22))// 'XXII'
- 20 is represented by 'XX'
- 2 is represented by 'II'

solution(1990))// 'MCMXC'
- 1000 = 'M'
- 900 = 'CM' which is 1000 - 100 = 900
- 90 = 'XC' which is 100 - 10 = 90

Mental Model:
If we have the number 1990, we need to get an array of place values for each
digit in the number eg. [1000, 900, 90, 0], then we can convert this array
to the roman numerals and join them into a string.

*/

const ROMAN_NUMERALS = {
  M:1000, CM:900, D:500, CD:400, C:100, XC:90,
  L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1
};

function solution(num) {
  let romanNumerals = '';

  for (let numeral in ROMAN_NUMERALS) {
    while (num >= ROMAN_NUMERALS[numeral]) {
      romanNumerals += numeral;
      num -= ROMAN_NUMERALS[numeral];
    }
  }

  return romanNumerals;
}

console.log(solution(1))// 'I'
console.log(solution(2))// 'II'
console.log(solution(3))// 'III'
console.log(solution(4))// 'IV'
console.log(solution(5))// 'V'
console.log(solution(9))// 'IX'
console.log(solution(10))// 'X'
console.log(solution(11))// 'XI'
console.log(solution(19))// 'XIX'
console.log(solution(22))// 'XXII'
console.log(solution(15))// 'XV'
console.log(solution(1000))// 'M'
console.log(solution(1001))// 'MI'
console.log(solution(1990))// 'MCMXC'
console.log(solution(2007))// 'MMVII'
console.log(solution(2008))// 'MMVIII'

