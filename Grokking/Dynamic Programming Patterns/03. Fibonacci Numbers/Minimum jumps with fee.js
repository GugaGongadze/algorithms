const findMinFee = function (fees) {
  const memo = {};

  function findMinFeeRecursive(fees, idx) {
    if (idx >= fees.length) return 0;

    if (memo[idx]) return memo[idx];

    memo[idx] =
      fees[idx] +
      Math.min(
        findMinFeeRecursive(fees, idx + 1),
        findMinFeeRecursive(fees, idx + 2),
        findMinFeeRecursive(fees, idx + 3)
      );

    return memo[idx];
  }

  return findMinFeeRecursive(fees, 0);
};

const findMinFeeBottomUp = (fees) => {
  const dp = new Array(fees.length + 1).fill(0);
  dp[0] = 0;
  dp[1] = fees[0];
  dp[2] = fees[0];

  for (let i = 2; i < fees.length; i++) {
    dp[i + 1] = Math.min(
      fees[i] + dp[i],
      fees[i - 1] + dp[i - 1],
      fees[i - 2] + dp[i - 2]
    );
  }

  return dp[fees.length];
};

console.log(`Minimum fee needed: ---> ${findMinFeeBottomUp([1, 2, 5, 2, 1, 2])}`); // 3
console.log(`Minimum fee needed: ---> ${findMinFeeBottomUp([2, 3, 4, 5])}`); // 5
