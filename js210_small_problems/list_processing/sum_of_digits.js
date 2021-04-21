function sum(num) {
  return String(num)
    .split('')
    .reduce((acc, val) => acc + Number(val), 0);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45