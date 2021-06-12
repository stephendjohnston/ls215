"use strict";

function staggeredCase(string, countNonAlpha = false) {
  let capitalize = true;

  return string
    .split('')
    .map(char => {
      if (char.match(/[a-z]/i) || countNonAlpha) {
        char = capitalize ? char.toUpperCase() : char.toLowerCase();
        capitalize = !capitalize;
      }

      return char;
    })
    .join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
console.log(staggeredCase("I Love Launch School!", true) === "I LoVe lAuNcH ScHoOl!")