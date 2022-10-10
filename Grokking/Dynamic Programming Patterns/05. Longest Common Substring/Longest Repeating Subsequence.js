const findLRSLength = function (str) {
  const memo = [];

  function findLRSLengthRecursive(str, i1, i2) {
    if (i1 === str.length || i2 === str.length) return 0;

    memo[i1] = memo[i1] || [];

    if (memo[i1][i2]) return memo[i1][i2];

    if (i1 !== i2 && str[i1] === str[i2]) {
      memo[i1][i2] = 1 + findLRSLengthRecursive(str, i1 + 1, i2 + 1);

      return memo[i1][i2];
    }

    const c1 = findLRSLengthRecursive(str, i1, i2 + 1);
    const c2 = findLRSLengthRecursive(str, i1 + 1, i2);

    memo[i1][i2] = Math.max(c1, c2);
    return memo[i1][i2];
  }
  return findLRSLengthRecursive(str, 0, 0);
};

const findLRSLengthBottomUp = (str) => {
  const dp = new Array(str.length + 1)
    .fill(0)
    .map(() => new Array(str.length + 1).fill(0));

  for (let i = 1; i <= str.length; i++) {
    for (let j = 1; j <= str.length; j++) {
      if (i !== j && str[i - 1] === str[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[str.length][str.length];
};

console.log(findLRSLengthBottomUp('tomorrow'));
console.log(findLRSLengthBottomUp('aabdbcec'));
console.log(findLRSLengthBottomUp('fmff'));
