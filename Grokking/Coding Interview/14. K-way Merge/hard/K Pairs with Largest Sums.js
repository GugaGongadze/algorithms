const Heap = require('collections/heap');

const find_k_largest_pairs = function (nums1, nums2, k) {
  if (k > nums1.length * nums2.length) return;

  let max_heap = new Heap([], null, (a, b) => b[0] + b[1] - (a[0] + a[1]));

  for (let i = 0; i < nums2.length; i++) {
    let num1 = nums1[0];
    let num2 = nums2[i];

    max_heap.push([num1, num2]);
  }

  for (let i = 1; i < nums1.length; i++) {
    let num1 = nums1[i];

    for (let j = 0; j < nums2.length; j++) {
      const num2 = nums2[j];

      let [n1, n2] = max_heap.peek();
      if (num1 + num2 <= n1 + n2) return max_heap.content;

      max_heap.pop();
      max_heap.push([num1, num2]);
    }
  }

  return max_heap.content;
};

console.log(
  `Pairs with largest sum are: ${find_k_largest_pairs([9, 8, 2], [6, 3, 1], 3)}`
);
