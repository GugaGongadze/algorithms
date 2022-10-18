/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let max = min;

  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    if (price < min && price < max) {
      min = price;
      max = price;
    } else if (price > min && price > max) {
      max = price;
      profit = Math.max(profit, max - min);
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 4, 1])); // 2
