var coinChange = function (coins, amount) {
  if (amount === 0) return 0;

  const memo = [];

  function coinChangeRecursive(coins, amount, idx) {
    if (idx >= coins.length) return -1;

    const coin = coins[idx];

    memo[amount] = memo[amount] || [];

    if (memo[amount][idx]) return memo[amount][idx];

    if (coin === amount) return 1;

    if (coin > amount) {
      memo[amount][idx] = coinChangeRecursive(coins, amount, idx + 1);
    } else {
      const including = coinChangeRecursive(coins, amount - coin, idx);
      const excluding = coinChangeRecursive(coins, amount, idx + 1);

      if (including === -1 && excluding === -1) {
        memo[amount][idx] = -1;
      } else if (including === -1) {
        memo[amount][idx] = excluding;
      } else if (excluding === -1) {
        memo[amount][idx] = including + 1;
      } else {
        memo[amount][idx] = Math.min(including + 1, excluding);
      }
    }

    return memo[amount][idx];
  }

  return coinChangeRecursive(coins, amount, 0);
};

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0
console.log(coinChange([411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422], 9864)); // 24
console.log(coinChange([186, 419, 83, 408], 6249)); // 20
console.log(coinChange([1, 2, 5], 100)); // 20
