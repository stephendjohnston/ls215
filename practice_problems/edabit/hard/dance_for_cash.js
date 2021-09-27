"use strict";

// Edabit > Hard > Dance for Cash

const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function isNotValid(pin) {
  return /[^0-9]/g.test(pin) || pin.length !== 4;
}

function danceConvert(pin) {
  if (isNotValid(pin)) return 'Invalid input';
  
  return pin.split('').map((digit, idx) => {
    return MOVES[(Number(digit) + idx) % MOVES.length];
  });
}

console.log(danceConvert("0000"))// ['Shimmy', 'Shake', 'Pirouette', 'Slide'])
console.log(danceConvert("5555"))// ['Headspin', 'Dosado', 'Pop', 'Lock'])
console.log(danceConvert("8888"))// ['Lock', 'Arabesque', 'Shimmy', 'Shake'])
console.log(danceConvert("0123"))// ['Shimmy', 'Pirouette', 'Box Step', 'Dosado'])
console.log(danceConvert("8765"))// ['Lock', 'Lock', "Lock", 'Lock'])
console.log(danceConvert("9104"))// ['Arabesque', 'Pirouette', 'Pirouette', 'Pop'])
console.log(danceConvert("3619"))// ['Slide', 'Pop', 'Slide', 'Pirouette'])
console.log(danceConvert("9742"))// ['Arabesque', 'Lock', 'Dosado', 'Headspin'])
console.log(danceConvert("a95f"))// "Invalid input.")
console.log(danceConvert("834")) //"Invalid input.")
console.log(danceConvert("+493"))// "Invalid input.")
console.log(danceConvert("-324"))// "Invalid input.")