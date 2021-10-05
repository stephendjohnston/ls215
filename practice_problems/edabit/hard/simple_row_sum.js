"use strict";

// Edabit > Hard > Simple Row Sum

function rowSum(n) {
  let rows = [];
  let numToAdd = 1;
  
  for (let i = 0; i < n; i += 1) {
    rows[i] = [];

    for (let j = 0; j < i + 1; j += 1) {
      rows[i].push(numToAdd);
      numToAdd += 1;
    }
  }
  
  return rows[n - 1].reduce((acc, num) => acc + num);
}

/*
The inner loop has to add numbers in an incremental fashion.
eg. it has to add 1 number to the first row, 2 numbers to the second row,
three numbers to the third row etc.
The innter loop starts at 0 every time, and each time the inner loop is
initialized, the loop has to increment one more time than the previous
initialization. 

loop 1 -> j = 0, i = 0 + 1 = 1 -> loops one time
loop 2 -> j = 0, i = 1 + 1 = 2 -> loops twice
loop 3 -> j = 0, i = 2 + 1 = 3 -> loops thrice
loop 4 -> j = 0, i = 3 + 1 = 4 -> loops four times

row 1 = 1
row 2 = 2, 3
row 3 = 4, 5, 6
row 4 = 7, 8, 9, 10
row 5 = 11, 12, 13, 14, 15
row 6 = 16, 17, 18, 19, 20, 21



rows = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10], [11, 12, 13, 14, 15]]

rows[0] = [1]
rows[1] = [2, 3]
rows[2] = [4, 5, 6]
rows[3] = [7, 8, 9, 10]
etc
*/

console.log(rowSum(1))// 1)
console.log(rowSum(2))// 5)
console.log(rowSum(3))// 15)
console.log(rowSum(4))// 34)
console.log(rowSum(5))// 65)
console.log(rowSum(6))// 111)
console.log(rowSum(7))// 175)
console.log(rowSum(8))// 260)
console.log(rowSum(9))// 369)
console.log(rowSum(10))// 505)
console.log(rowSum(11))// 671)
console.log(rowSum(12))// 870)
console.log(rowSum(13))// 1105)
console.log(rowSum(14))// 1379)
console.log(rowSum(15))// 1695)
console.log(rowSum(16))// 2056)
console.log(rowSum(17))// 2465)
console.log(rowSum(18))// 2925)
console.log(rowSum(19))// 3439)
console.log(rowSum(20))// 4010)
console.log(rowSum(21))// 4641)
console.log(rowSum(22))// 5335)
console.log(rowSum(23))// 6095)
console.log(rowSum(24))// 6924)
console.log(rowSum(25))// 7825)
console.log(rowSum(26))// 8801)
console.log(rowSum(27))// 9855)