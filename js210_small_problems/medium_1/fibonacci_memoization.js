"use strict";

function fibonacci(nth, memo = [0, 1, 1]) {
   if (memo[nth]) {
      return memo[nth] 
   }
   else {
      if (nth < 3) {
        return 1
      } else {
         memo[nth] = fibonacci(nth - 1, memo) + fibonacci(nth - 2, memo)
      }
   }
   return memo[nth];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765