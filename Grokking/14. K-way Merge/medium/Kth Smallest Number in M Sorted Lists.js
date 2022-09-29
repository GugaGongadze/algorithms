const Heap = require('collections/heap');

const find_Kth_smallest = function (lists, k) {
  let heap = new Heap([], null, (a, b) => b.value - a.value);

  lists.forEach((list, idx) => {
    heap.push({
      subList: idx,
      idxInSubList: 0,
      value: list[0],
    });
  });

  let i = 0;

  while (i < k) {
    let el = heap.pop();
    let { subList, idxInSubList, value } = el;
    i++;

    if (i === k) return value;

    heap.push({
      subList: subList,
      idxInSubList: idxInSubList + 1,
      value: lists[subList][idxInSubList + 1],
    });
  }

  return -1;
};

console.log(
  `Kth smallest number is: ${find_Kth_smallest(
    [
      [2, 6, 8],
      [3, 6, 7],
      [1, 3, 4],
    ],
    5
  )}`
);
