const Heap = require('collections/heap');

const minimum_cost_to_connect_ropes = function (ropeLengths) {
  let minHeap = new Heap(ropeLengths, null, (a, b) => b - a);

  let cost = 0;

  while (minHeap.length > 0) {
    let min1 = minHeap.pop();
    let min2 = minHeap.pop();

    if (min2) {
      let sum = min1 + min2;
      cost += sum;
      minHeap.push(sum);
    }
  }

  return cost;
};

console.log(
  `Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5])}`
);
console.log(
  `Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([3, 4, 5, 6])}`
);
console.log(
  `Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5, 2])}`
);
