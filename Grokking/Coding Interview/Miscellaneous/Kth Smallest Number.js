const Heap = require('collections/heap');

const find_Kth_smallest_number = function (nums, k) {
  const minHeap = new Heap([], null, (a, b) => b - a);

  for (let idx = 0; idx < nums.length; idx++) {
    const num = nums[idx];
    minHeap.push(num);
  }

  for (let idx = 0; idx < k; idx++) {
    let el = minHeap.pop();

    if (idx + 1 === k) return el;
  }
};

console.log(
  `Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`
);
// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(
  `Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`
);
console.log(
  `Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`
);
