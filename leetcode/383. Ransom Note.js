var canConstruct = function (ransomNote, magazine) {
  const ransomMap = {};
  const magMap = {};

  for (const char of ransomNote) {
    if (char in ransomMap) {
      ransomMap[char] += 1;
    } else {
      ransomMap[char] = 1;
    }
  }

  for (const char of magazine) {
    if (char in magMap) {
      magMap[char] += 1;
    } else {
      magMap[char] = 1;
    }
  }

  for (const [key, value] of Object.entries(ransomMap)) {
    if (!magMap[key] || magMap[key] < value) return false;
  }

  return true;
};

console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
