const findMinimumDeletions = (str) => {
  const memo = {};

  function findMinimumDeletionsRecursive(str, start, end) {
    if (start > end) return 0;
    if (start === end) return 0;

    memo[start] = memo[start] || [];

    if (memo[start][end]) return memo[start][end];

    if (str[start] === str[end]) {
      memo[start][end] = findMinimumDeletionsRecursive(str, start + 1, end - 1);
      return memo[start][end];
    }

    const excludingStart = findMinimumDeletionsRecursive(str, start + 1, end);
    const excludingEnd = findMinimumDeletionsRecursive(str, start, end - 1);

    memo[start][end] = Math.min(excludingStart, excludingEnd) + 1;

    return memo[start][end];
  }

  return findMinimumDeletionsRecursive(str, 0, str.length - 1);
};

const findMinimumDeletionsBottomUp = (str) => {
  const dp = new Array(str.length).fill(0).map(() => new Array(str.length).fill(0));

  for (let i = str.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[0][str.length - 1];
};

console.log(findMinimumDeletionsBottomUp('abdbca')); // 1
console.log(findMinimumDeletionsBottomUp('cddpd')); // 2
console.log(findMinimumDeletionsBottomUp('pqr')); // 2
