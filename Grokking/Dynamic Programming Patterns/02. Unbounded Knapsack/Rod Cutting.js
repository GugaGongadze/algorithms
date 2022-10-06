const solveRodCuttingMemo = function (lengths, prices, n) {
  const memo = {};

  function solveRodCuttingMemoRecursive(lengths, prices, n, idx) {
    if (n <= 0 || idx >= lengths.length) return 0;

    let including = 0;
    if (n >= lengths[idx]) {
      including =
        prices[idx] +
        solveRodCuttingMemoRecursive(lengths, prices, n - lengths[idx], idx);
    }

    let excluding = solveRodCuttingMemoRecursive(lengths, prices, n, idx + 1);

    return Math.max(including, excluding);
  }

  return solveRodCuttingMemoRecursive(lengths, prices, n, 0);
};

const lengths = [1, 2, 3, 4, 5];
const prices = [2, 6, 7, 10, 13];
console.log(`Maximum profit: ---> ${solveRodCuttingMemo(lengths, prices, 5)}`);
