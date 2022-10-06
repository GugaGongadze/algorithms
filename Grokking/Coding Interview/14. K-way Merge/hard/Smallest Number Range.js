const Heap = require('collections/heap');

const find_smallest_range = function (lists) {
  let min_heap = new Heap([], null, (a, b) => b[0] - a[0]);

  let rangeStart = 0;
  let rangeEnd = Infinity;
  let currentMaxNumber = -Infinity;

  // put the 1st element of each array in the max heap
  lists.forEach((list) => {
    min_heap.push([list[0], 0, list]);
    currentMaxNumber = Math.max(currentMaxNumber, list[0]);
  });

  // take the smallest(top) element from the min heap, if it gives us smaller range, update the ranges
  // if the array of the top element has more elements, insert the next element in the heap
  while (min_heap.length === lists.length) {
    const [num, i, list] = min_heap.pop();
    if (rangeEnd - rangeStart > currentMaxNumber - num) {
      rangeStart = num;
      rangeEnd = currentMaxNumber;
    }
    if (list.length > i + 1) {
      // insert the next element in the heap
      min_heap.push([list[i + 1], i + 1, list]);
      currentMaxNumber = Math.max(currentMaxNumber, list[i + 1]);
    }
  }

  return [rangeStart, rangeEnd];
};

console.log(
  `Smallest range is: ${find_smallest_range([
    [1, 5, 8],
    [4, 12],
    [7, 8, 10],
  ])}`
);
console.log(
  `Smallest range is: ${find_smallest_range([
    [1, 9],
    [4, 12],
    [7, 10, 16],
  ])}`
);
