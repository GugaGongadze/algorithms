var minWindow = function (s, t) {
  const map = {};
  let count = 0;

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (char in map) {
      map[char] += 1;
    } else {
      map[char] = 1;
      count++;
    }
  }

  let left = 0;
  let right = -1;

  let minStr = '';

  while (right <= s.length) {
    if (count === 0) {
      const leftChar = s[left];

      if (map[leftChar] !== undefined) {
        map[leftChar]++;
      }

      if (map[leftChar] > 0) {
        count++;
      }

      let curr = s.substring(left, right + 1);
      if (minStr === '') {
        minStr = curr;
      } else {
        minStr = minStr.length < curr.length ? minStr : curr;
      }

      left++;
    } else {
      right++;

      const rightChar = s[right];

      if (map[rightChar] !== undefined) {
        map[rightChar]--;
      }

      if (map[rightChar] === 0) {
        count--;
      }
    }
  }
  return minStr;
};

console.log(minWindow('ADOBECODEBANC', 'ABC')); // "BANC"
console.log(minWindow('a', 'a')); // "a"
console.log(minWindow('a', 'aa')); // ""
console.log(minWindow('ab', 'a')); // "a"
console.log(minWindow('ab', 'b')); // "b"
console.log(minWindow('ab', 'A')); // ""
console.log(minWindow('abc', 'ac')); // "abc"
console.log(minWindow('bbaa', 'ba')); // "ba"
