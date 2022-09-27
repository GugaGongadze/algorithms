const Heap = require('collections/heap');

const find_closest_elements = function (arr, K, X) {
  if (arr.length <= K) return arr;
  if (X < arr[0]) return arr.slice(0, K);
  if (X > arr[arr.length - 1]) return arr.slice(arr.length - K);

  let heap = new Heap([], null, (a, b) => {
    let diff_to_a = Math.abs(a - X);
    let diff_to_b = Math.abs(b - X);

    return diff_to_a - diff_to_b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (i < K) {
      heap.push(arr[i]);
    } else {
      if (Math.abs(heap.peek() - X) > Math.abs(arr[i] - X)) {
        heap.pop();
        heap.push(arr[i]);
      }
    }
  }

  return heap.toArray();
};

console.log(
  `'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`
);
console.log(
  `'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`
);
console.log(
  `'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`
);
