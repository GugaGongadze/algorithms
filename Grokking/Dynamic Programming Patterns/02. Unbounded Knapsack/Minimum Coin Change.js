let countChangeMemo = function (denominations, total) {
  const memo = {};

  function countChangeRecursive(denominations, total, idx) {
    if (total === 0) return 0;

    if (idx >= denominations.length) return Number.MAX_VALUE;

    memo[idx] = memo[idx] || [];

    if (memo[idx][total] !== undefined) return memo[idx][total];

    let including = Number.MAX_VALUE;
    if (total >= denominations[idx]) {
      const res = countChangeRecursive(denominations, total - denominations[idx], idx);
      if (res !== Number.MAX_VALUE) {
        including = res + 1;
      }
    }

    let excluding = countChangeRecursive(denominations, total, idx + 1);

    memo[idx][total] = Math.min(including, excluding);

    return memo[idx][total];
  }

  return countChangeRecursive(denominations, total, 0);
};

function countChangeBottomUp(denominations, total) {
  const dp = new Array(total + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (let i = 1; i < denominations.length; i++) {
    for (let j = total; j >= 0; j--) {
      if (j >= denominations[i]) {
        dp[j] = Math.min(dp[j], dp[j - denominations[i]] + 1);
      }
    }
  }

  return dp[total];
}

console.log(`Number of ways to make change: ---> ${countChangeBottomUp([1, 2, 3], 5)}`);
console.log(`Number of ways to make change: ---> ${countChangeBottomUp([1, 2, 3], 11)}`);
