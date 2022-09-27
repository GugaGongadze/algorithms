const Heap = require('collections/heap');

const find_k_frequent_numbers = function (nums, k) {
  let frequency_map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in frequency_map) {
      frequency_map[nums[i]] += 1;
    } else {
      frequency_map[nums[i]] = 1;
    }
  }

  let frequency_heap = new Heap(nums, null, (a, b) => {
    return frequency_map[a] - frequency_map[b];
  });

  let topNumbers = new Set();

  while (topNumbers.size < k) {
    let num = frequency_heap.pop();

    if (!topNumbers.has(num)) {
      topNumbers.add(num);
    }
  }

  return topNumbers.toArray();
};

console.log(
  `Here are the K frequent numbers: ${find_k_frequent_numbers(
    [1, 3, 5, 12, 11, 12, 11],
    2
  )}`
);
console.log(
  `Here are the K frequent numbers: ${find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`
);
