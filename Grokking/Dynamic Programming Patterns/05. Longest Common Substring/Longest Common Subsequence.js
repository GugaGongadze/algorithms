const findLCSLengthMemo = function (s1, s2) {
  const memo = [];

  function findLCSLengthRecursive(s1, s2, i1, i2, count) {
    if (i1 == s1.length || i2 == s2.length) return count;

    memo[i1] = memo[i1] || [];
    memo[i1][i2] = memo[i1][i2] || [];

    if (memo[i1][i2][count]) return memo[i1][i2][count];

    let c1 = count;

    if (s1[i1] == s2[i2]) {
      c1 = findLCSLengthRecursive(s1, s2, i1 + 1, i2 + 1, count + 1);
    }

    const c2 = findLCSLengthRecursive(s1, s2, i1, i2 + 1, count);
    const c3 = findLCSLengthRecursive(s1, s2, i1 + 1, i2, count);

    memo[i1][i2][count] = Math.max(c1, Math.max(c2, c3));

    return memo[i1][i2][count];
  }

  return findLCSLengthRecursive(s1, s2, 0, 0, 0);
};

const findLCSLengthBottomUp = (s1, s2) => {
  const dp = new Array(2).fill(0).map(() => new Array(s2.length).fill(0));

  for (let i = 0; i < s2.length; i++) {
    if (s2[i] === s1[0]) dp[0][i] = 1;
  }

  for (let i = 0; i < s1.length; i++) {
    if (s2[0] === s1[i]) dp[i % 2][0] = 1;
  }

  let maxLength = 0;

  for (let i = 1; i < s1.length; i++) {
    for (let j = 1; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
      } else {
        dp[i % 2][j] = Math.max(dp[(i - 1) % 2][j], dp[i % 2][j - 1]);
      }

      maxLength = Math.max(maxLength, dp[i % 2][j]);
    }
  }

  return maxLength;
};

console.log(
  `Length of Longest Common Subsequence: ---> ${findLCSLengthBottomUp('abdca', 'cbda')}`
);
console.log(
  `Length of Longest Common Subsequence: ---> ${findLCSLengthBottomUp(
    'passport',
    'ppsspt'
  )}`
);
