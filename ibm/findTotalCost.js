function findTotalCost(arr) {
  if (arr.length < 2) return 0;

  arr.sort((a, b) => a - b);

  let cost = 0;

  while (arr.length > 1) {
    let min = arr.shift();
    let max = arr.pop();

    arr.push(min + max);

    cost += Math.ceil((min + max) / (max - min + 1));
  }

  return cost;
}

console.log(findTotalCost([3, 5, 2, 1, 9, 6]));
