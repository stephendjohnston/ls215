"use strict";

/*
Create a fibonacci Sequence that computes the nth Fibonacci number, where 
nth is an argument passed to the function.
The Fibonacci series is a sequence of numbers in which each number is the 
sum of the previous two numbers.

The first two fibonacci numbers 1 and 1. The third number is 1 + 1 = 2. The
fourth number is 1 + 2 = 3. The fifth number is 2 + 3 = 5.

This can be represented as:

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2


*/

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }

  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765