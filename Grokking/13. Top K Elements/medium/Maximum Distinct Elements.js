const Heap = require('collections/heap');

const find_maximum_distinct_elements = function (nums, k) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (element in map) {
      map[element] += 1;
    } else {
      map[element] = 1;
    }
  }

  let heap = new Heap([], null, (a, b) => map[a] - map[b]);

  let distinct = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (map[element] !== 1) {
      heap.push(element);
    } else {
      distinct += 1;
    }
  }

  if (heap.length < k) {
    return distinct - (k - heap.length);
  }

  let i = 0;

  while (i < k) {
    let el = heap.pop();

    if (map[el] > k + 1) continue;
    if (map[el] === k + 1) {
      distinct++;
      break;
    }

    i++;
  }

  return distinct;
};

console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [7, 3, 5, 8, 5, 3, 3],
    2
  )}`
);
console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [3, 5, 12, 11, 12],
    3
  )}`
);
console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5],
    2
  )}`
);
