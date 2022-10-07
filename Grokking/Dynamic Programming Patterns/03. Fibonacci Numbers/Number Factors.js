const countWays = function (n) {
  const memo = {};

  function countWaysRecursive(n) {
    if (n < 0) return 0;
    if (n === 0) return 1;

    if (memo[n]) return memo[n];

    memo[n] =
      countWaysRecursive(n - 1) + countWaysRecursive(n - 3) + countWaysRecursive(n - 4);

    return memo[n];
  }

  return countWaysRecursive(n);
};

const countWaysBottomUp = (n) => {
  if (n < 0) return 0;

  const dp = [1, 1, 1, 2];

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 3] + dp[i - 4];
  }

  return dp[n];
};

console.log(`Number of ways: ---> ${countWaysBottomUp(4)}`); // 4
console.log(`Number of ways: ---> ${countWaysBottomUp(5)}`); // 6
console.log(`Number of ways: ---> ${countWaysBottomUp(6)}`); // 9
