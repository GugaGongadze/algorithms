const findMaxSteal = function (wealth) {
  const memo = {};

  function findMaxStealRecursive(wealth, idx) {
    if (idx >= wealth.length) return 0;

    if (wealth.length - 1 === idx) return wealth[idx];

    if (memo[idx]) return memo[idx];

    const including = wealth[idx] + findMaxStealRecursive(wealth, idx + 2); // skip adjacent house
    const excluding = findMaxStealRecursive(wealth, idx + 1);

    memo[idx] = Math.max(including, excluding);

    return memo[idx];
  }

  return findMaxStealRecursive(wealth, 0);
};

const findMaxStealBottomUp = (wealth) => {
  const dp = new Array(wealth.length + 1).fill(0);
  dp[1] = wealth[0];

  for (let i = 2; i <= wealth.length; i++) {
    const including = wealth[i - 1] + dp[i - 2];
    const excluding = dp[i - 1];

    dp[i] = Math.max(including, excluding);
  }

  return dp[wealth.length];
};

console.log(`Maximum stealing: ---> ${findMaxStealBottomUp([2, 5, 1, 3, 6, 2, 4])}`);
console.log(`Maximum stealing: ---> ${findMaxStealBottomUp([2, 10, 14, 8, 1])}`);
