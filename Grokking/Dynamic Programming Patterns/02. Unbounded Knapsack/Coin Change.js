let countChangeMemo = function (denominations, total) {
  const memo = {};

  function countChangeRecursive(denominations, total, idx) {
    if (total === 0) return 1;

    if (idx >= denominations.length) return 0;

    memo[idx] = memo[idx] || [];

    if (memo[idx][total] !== undefined) return memo[idx][total];

    let including = 0;
    if (total >= denominations[idx]) {
      including = countChangeRecursive(denominations, total - denominations[idx], idx);
    }

    let excluding = countChangeRecursive(denominations, total, idx + 1);

    memo[idx][total] = including + excluding;

    return memo[idx][total];
  }

  return countChangeRecursive(denominations, total, 0);
};

function countChangeBottomUp(denominations, total) {
  const dp = new Array(total + 1).fill(0);
  dp[0] = 0;

  for (let i = 1; i < total; i++) {
    dp[i] = denominations[0] === i ? 1 : 0;
  }

  for (let i = 1; i < denominations.length; i++) {
    for (let j = total; j >= 0; j--) {
      dp[j] = j >= denominations[i] ? denominations[i] + dp[j - denominations[i]] : dp[j];
    }
  }

  return dp[total];
}

console.log(`Number of ways to make change: ---> ${countChangeBottomUp([1, 2, 3], 5)}`);
