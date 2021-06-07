"use strict";

function twice(num) {
  let stringNum = String(num);
  let len = stringNum.length;

  if (stringNum.slice(0, len / 2) === stringNum.slice(len / 2)) {
    return num;
  }

  return num * 2;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676