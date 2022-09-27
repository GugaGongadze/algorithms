const Heap = require('collections/heap');

const schedule_tasks = function (tasks, k) {
  let freq_map = {};

  for (let i = 0; i < tasks.length; i++) {
    const char = tasks[i];

    if (char in freq_map) {
      freq_map[char] += 1;
    } else {
      freq_map[char] = 1;
    }
  }

  let max_heap = new Heap([], null, (a, b) => freq_map[a] - freq_map[b]);

  Object.keys(freq_map).forEach((char) => {
    max_heap.push([freq_map[char], char]);
  });

  let counter = 0;
  let previousChar = null;
  let previousFrequency = 0;

  let i = 0;
  let indices = {};

  while (max_heap.length > 0) {
    const [frequency, char] = max_heap.pop();
    if (previousChar !== null && previousFrequency > 0) {
      max_heap.push([previousFrequency, previousChar]);
    }

    if (char in indices) {
      let diff = i - indices[char];

      if (diff <= k) {
        counter += k - diff + 1;
        indices[char] = undefined;
      } else {
        indices[char] = i;
      }
    } else {
      indices[char] = i;
    }

    counter++;
    previousChar = char;
    previousFrequency = frequency - 1;
    i++;
  }

  return counter;
};

console.log(
  `Minimum intervals needed to execute all tasks: ${schedule_tasks(
    ['a', 'a', 'a', 'b', 'c', 'c'],
    2
  )}`
);
console.log(
  `Minimum intervals needed to execute all tasks: ${schedule_tasks(['a', 'b', 'a'], 3)}`
);
