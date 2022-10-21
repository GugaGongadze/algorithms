var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;

  const charMap = {};

  let maxSubsLength = 0;

  let left = 0;
  let right = 1;

  charMap[s[left]] = 1;

  while (right < s.length) {
    if (charMap[s[right]] !== undefined) {
      maxSubsLength = Math.max(maxSubsLength, right - left);

      while (s[left] !== s[right]) {
        delete charMap[s[left]];
        left++;
      }

      delete charMap[s[left]];
      left++;
    } else {
      charMap[s[right]] = 1;
      right++;
    }
  }

  return Math.max(maxSubsLength, right - left);
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
