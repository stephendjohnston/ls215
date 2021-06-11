"use strict";

function letterCaseCount(string) {
  const caseCount = { lowercase: 0, uppercase: 0, neither: 0 };

  [...string].forEach(char => {
    if (/[a-z]/g.test(char)) {
      caseCount.lowercase += 1;
    } else if (/[A-Z]/g.test(char)) {
      caseCount.uppercase += 1;
    } else {
      caseCount.neither += 1;
    }
  });

  return caseCount;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }