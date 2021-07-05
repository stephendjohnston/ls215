"use strict";

function strangerStrings(string) {
  let sumOfDigits = 0;
  const strangers = [];

  [...string].forEach(char => {
    if (/[0-9]/.test(char)) {
      sumOfDigits += Number(char);
    } else if (char !== ' ') {
      strangers.push(char);
    }
  });

  let stringOfStrangers = strangers.sort((a, b) => b.codePointAt(0) - a.codePointAt(0));
  return [sumOfDigits, stringOfStrangers.join('')];
}

strangerStrings("𝟚2 𝟛3 𝟘0 𝟙1"); // [6, "𝟛𝟚𝟙𝟘"]
strangerStrings("𝟝 𝟚003   9"); // [12, "𝟝𝟚"])
strangerStrings("32   000𝟜0 0 00𝟙𝟟"); // [5, "𝟟𝟜𝟙"])
strangerStrings("8 𝟡4 3𝟞"); // [15, "𝟡𝟞"])
strangerStrings("9   2 21 8"); // [22, ""])
strangerStrings("7𝟝   16𝟞 𝟟5𝟟"); // [19, "𝟟𝟟𝟞𝟝"])
strangerStrings("0𝟝𝟞   𝟞𝟟𝟡 𝟡"); // [0, "𝟡𝟡𝟟𝟞𝟞𝟝"])