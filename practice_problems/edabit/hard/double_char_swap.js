"use strict";

function doubleSwap(string, char1, char2) {
  return [...string].map(char => {
    if (char === char1) return char2;
    if (char === char2) return char1;
    return char;
  }).join('');
}

doubleSwap("aabbccc", "a", "b"); // "bbaaccc"
doubleSwap("random w#rds writt&n h&r&", "#", "&"); // "random w&rds writt#n h#r#"
doubleSwap("128 895 556 788 999", "8", "9"); // "129 985 556 799 888"
doubleSwap("mamma mia", "m", "a"); // "amaam aim"
doubleSwap("**##**", "*", "#"); // "##**##"
doubleSwap("123456789", "4", "5"); // "123546789"
doubleSwap("445566&&", "4", "&"); // "&&556644"
doubleSwap("!?@,.", ",", "."); // "!?@.,"
doubleSwap("Q_Q T_T =.= >.<", "Q", "T"); // "T_T Q_Q =.= >.<"
doubleSwap("(Q_Q) (T_T) (=.=) (>.<)", ")", "("); // ")Q_Q( )T_T( )=.=( )>.<("
doubleSwap("<>", ">", "<"); // "><"
doubleSwap("001101", "1", "0"); // "110010"
doubleSwap("!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~", "a", "b"); // "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`bacdefghijklmnopqrstuvwxyz{|}~"