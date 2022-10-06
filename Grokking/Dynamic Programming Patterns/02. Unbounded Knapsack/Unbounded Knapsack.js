let solveKnapsackBasic = function (profits, weights, capacity) {
  let profit = 0;
  const weightProfitMap = {};
  const marginMap = {};

  for (let i = 0; i < weights.length; i++) {
    const weight = weights[i];
    marginMap[weight] = profits[i] / weight;
    weightProfitMap[weight] = profits[i];
  }

  const margins = [...weights].sort((a, b) => {
    if (marginMap[a] === marginMap[b]) return b - a;
    return marginMap[a] - marginMap[b];
  });

  while (capacity) {
    let maxMargin = margins[margins.length - 1];

    while (maxMargin > capacity) {
      margins.pop();
      maxMargin = margins[margins.length - 1];
    }

    profit += weightProfitMap[maxMargin];
    capacity -= maxMargin;
  }

  return profit;
};

const solveKnapsackMemo = (profits, weights, capacity) => {
  const memo = {};

  function solveKnapsackRecursive(profits, weights, capacity, idx) {
    if (capacity <= 0 || idx >= profits.length) return 0;

    memo[idx] = memo[idx] || [];
    memo[idx + 1] = memo[idx + 1] || [];

    let including = 0;
    if (capacity >= weights[idx]) {
      including =
        profits[idx] +
        (memo[idx][capacity - weights[idx]] ||
          solveKnapsackRecursive(profits, weights, capacity - weights[idx], idx));
    }

    const excluding =
      memo[idx + 1][capacity] ||
      solveKnapsackRecursive(profits, weights, capacity, idx + 1);

    memo[idx][capacity] = Math.max(including, excluding);

    return memo[idx][capacity];
  }

  return solveKnapsackRecursive(profits, weights, capacity, 0);
};

const solveKnapsackBottomUp = (profits, weights, capacity) => {
  const dp = new Array(profits.length).fill(0).map(() => new Array(capacity + 1).fill(0));

  for (let i = 1; i <= capacity; i++) {
    dp[0][i] = capacity >= weights[0] ? profits[0] : 0;
  }

  for (let i = 1; i < weights.length; i++) {
    for (let j = capacity; j >= 0; j--) {
      let including = 0;
      if (j >= weights[i]) {
        including = profits[i] + dp[i - 1][j - weights[i]];
      }

      const excluding = dp[i - 1][j];

      dp[i][j] = Math.max(including, excluding);
    }
  }

  return dp[weights.length - 1][capacity];
};

const profits = [15, 50, 60, 90];
const weights = [1, 3, 4, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsackBottomUp(profits, weights, 8)}`);
