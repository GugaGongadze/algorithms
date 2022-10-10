const findLCSLengthMeMo = function (s1, s2) {
  const dp = [];

  function findLCSLengthRecursive(s1, s2, i1, i2, count) {
    if (i1 == s1.length || i2 == s2.length) return count;

    dp[i1] = dp[i1] || [];
    dp[i1][i2] = dp[i1][i2] || [];
    if (typeof dp[i1][i2][count] === 'undefined') {
      let c1 = count;
      if (s1[i1] == s2[i2]) {
        c1 = findLCSLengthRecursive(s1, s2, i1 + 1, i2 + 1, count + 1);
      }
      const c2 = findLCSLengthRecursive(s1, s2, i1, i2 + 1, 0);
      const c3 = findLCSLengthRecursive(s1, s2, i1 + 1, i2, 0);
      dp[i1][i2][count] = Math.max(c1, Math.max(c2, c3));
    }

    return dp[i1][i2][count];
  }
  return findLCSLengthRecursive(s1, s2, 0, 0, 0);
};

const findLCSLength = function (s1, s2) {
  const dp = Array(2)
    .fill(0)
    .map(() => Array(s2.length + 1).fill(0));

  let maxLength = 0;
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      dp[i % 2][j] = 0;

      if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
        dp[i % 2][j] = 1 + dp[(i - 1) % 2][j - 1];
        maxLength = Math.max(maxLength, dp[i % 2][j]);
      }
    }
  }
  return maxLength;
};

console.log(`Length of Longest Common Substring: ---> ${findLCSLength('abdca', 'cbda')}`);
console.log(
  `Length of Longest Common Substring: ---> ${findLCSLength('passport', 'ppsspt')}`
);
