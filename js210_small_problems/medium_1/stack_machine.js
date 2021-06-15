"use strict";

// Stack Machine Interpretation
// ----------------------------

/*
Problem:

A stack-and-register programming language is a language that uses a stack 
of values. Each operation in the language operates on a register, which can 
be thought of as the current value. The register is not part of the stack. 
An operation that requires two values pops the topmost item from the stack 
(i.e., the operation removes the most recently pushed value from the stack), 
operates on the popped value and the register value, and stores the result 
back in the register.

inputs: Program as a string that will contain:
  - Commands
  OR
  - Numbers (as string)

output: Number or nothing
  - the number printed will be the register value


Rules:
- There are two separate entities to deal with:
  - the stack and the register
    - The register can be thought of as the current value
    - The stack is a list of values that can used in coordination with
    the register
      - A stack is a list of values that grows and shrinks dynamically.
        - two methods that will be used: Array push and pop.
- the input is a string of commands and numbers
  - each command has it's own meaning
    n : Place a value, n, in the register. Do not modify the stack.
    PUSH : Push the register value onto the stack. Leave the value in the register.
    ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
    SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
    MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
    DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
    REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
    POP : Remove the topmost item from the stack and place it in the register.
    PRINT : Print the register value.

  - Each command in the language operates on the register
- all string arguments will be valid
- All operations are integer operations
- initialize the stack to []
- initialize the register to 0

Examples:

minilang('5 PUSH 3 MULT PRINT'); => // 15
START: stack is empty array: [] and register is 0
- 5: gets set as the register value
- PUSH: push register to value into stack: => [5] register is still 5
- 3: register gets set to 3
- MULT: pop 5 from the stack
  - set register to result of 5 * 3 => register = 15
  - stack is now empty: []
- PRINT: log the value of the register to the screen

Data Structure:

Array
  - split the arugment into array of strings
  - used for the stack
Number
  - register value
  - if a value in the argument is a number, convert the numString to a number
  for operation

Algorithm:
- initialize the stack to []
- initialize the register to 0
- create an array of operations by splitting the string by spaces ' '.
'5 PUSH 3 MULT PRINT'.split(' ') => [ '5', 'PUSH', '3', 'MULT', 'PRINT']
- iterate over the array of strings
  - determine if the current string is a command or a number
    - create a method?
      - use regex to determine is string is a number
        - if it is, register = Number(string);
  - if the string is a command
    - pass register value and command to method for operation
     - use switch statement to determine which operation gets
    - register will equal return value of method
- program ends when there loop ends
- return undefined?
*/

function performCommand(register, stack, token) {
  switch (token) {
    case 'PUSH':
      stack.push(register);
      return register;
    case 'ADD':
      return stack.pop() + register;
    case 'SUB':
      return register - stack.pop();
    case 'MULT':
      return stack.pop() * register;
    case 'DIV':
      return Math.floor(register / stack.pop());
    case 'REMAINDER':
      return Math.floor(register % stack.pop());
    case 'POP':
      return stack.pop();
      break;
    case 'PRINT':
      console.log(register);
      return register;
    default:
      return register;
  }
}

function minilang(program) {
  const stack = [];
  let register = 0;

  program.split(' ').forEach(token => {
    if (/[0-9]/g.test(token)) {
      register = Number(token);
    }

    register = performCommand(register, stack, token); // if token is a number this method will
  });
}

minilang('PRINT');
0

minilang('5 PUSH 3 MULT PRINT');
15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

// Further Exploration:
/*
the function should detect and report empty stack conditions (trying to use 
a value from the stack when there are no values), and invalid tokens in the 
program. Ideally, the function should return an error message if an error 
occurs, or undefined if the program runs successfully.

USES THE SAME performCommand() function as above.
*/

function isInvalidToken(token, stack) {
  const validTokens = [
    'PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER', 'POP', 'PRINT'
  ]
  if ((stack.length === 0 && ['ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER', 'POP'].includes(token))) {
    return true;
  }

  return !validTokens.includes(token) && !/[0-9]/g.test(token)
}

function minilang(program) {
  const stack = [];
  let register = 0;
  let tokens = program.split(' ');

  for (let i = 0; i < tokens.length; i += 1) {
    let token = tokens[i];

    if (isInvalidToken(token, stack)) {
      console.log('Invalid Token. Check input.');
      return;
    }

    if (/[0-9]/g.test(token)) {
      register = Number(token);
      continue;
    }

    register = performCommand(register, stack, token);
  };
}

minilang('POP PRINT');
// Invalid token

minilang('5 PUSH PRINT 3 MULT ADD PRINT');
// 5
// Invalid Token

minilang('5 PRINT PUSH 3 PRINT Y& ADD PRINT');
// 5
// 3
// Invalid Token

minilang('5 PUSH POP PRINT SUB');
// 5
// Invalid Token