/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const converted = s.toLowerCase().replaceAll(/[^0-9a-z]/g, '');
  if (converted.length < 2) return true;

  let low = 0;
  let high = converted.length - 1;

  while (low < high) {
    if (converted[low] !== converted[high]) return false;
    low++;
    high--;
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
