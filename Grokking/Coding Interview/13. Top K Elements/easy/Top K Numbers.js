const Heap = require('collections/heap');

const find_k_largest_numbers = function (nums, k) {
  let result = [];

  let maxHeap = new Heap(nums);

  for (let i = 0; i < k; i++) {
    result.push(maxHeap.pop());
  }

  return result;
};

console.log(
  `Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`
);
console.log(
  `Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`
);
