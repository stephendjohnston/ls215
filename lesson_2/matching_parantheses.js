function isBalanced(text) {
  let count = 0;

  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '(') count += 1;
    if (text[i] === ')') count -= 1;
    if (count < 0) return false;
  }

  return count === 0;
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false