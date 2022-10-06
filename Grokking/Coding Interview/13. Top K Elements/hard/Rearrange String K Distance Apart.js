const Heap = require('collections/heap');

const reorganize_string = function (str, k) {
  let freq_map = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

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

  let indices = {};

  let previousChar = null,
    previousFrequency = 0,
    resultString = [];

  let i = 0;
  while (max_heap.length > 0) {
    const [frequency, char] = max_heap.pop();
    // add the previous entry back in the heap if its frequency is greater than zero
    if (previousChar !== null && previousFrequency > 0) {
      max_heap.push([previousFrequency, previousChar]);
    }
    // append the current character to the result string and decrement its count

    if (char in indices) {
      let diff = i - indices[char];
      if (diff < k) return '';
    } else {
      indices[char] = i;
    }
    resultString.push(char);
    previousChar = char;
    previousFrequency = frequency - 1; // decrement the frequency
    i++;
  }

  return resultString.join('');
};

console.log(`Reorganized string: ${reorganize_string('Programming', 3)}`);
console.log(`Reorganized string: ${reorganize_string('mmpp', 2)}`);
console.log(`Reorganized string: ${reorganize_string('aab', 2)}`);
console.log(`Reorganized string: ${reorganize_string('aapa', 3)}`);
