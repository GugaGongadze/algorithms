/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (const char of s) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
    } else {
      const lastChar = stack.pop();
      if (char === ')' && lastChar !== '(') return false;
      if (char === ']' && lastChar !== '[') return false;
      if (char === '}' && lastChar !== '{') return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
