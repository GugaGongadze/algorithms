const Heap = require('collections/heap');

const sort_character_by_frequency = function (str) {
  let frequency_map = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char in frequency_map) {
      frequency_map[char] += 1;
    } else {
      frequency_map[char] = 1;
    }
  }

  let frequency_heap = new Heap([], null, (a, b) => a.frequency - b.frequency);

  Object.keys(frequency_map).forEach((char) => {
    frequency_heap.push({ char, frequency: frequency_map[char] });
  });

  let sorted = [];

  while (frequency_heap.length > 0) {
    let char = frequency_heap.pop();

    for (let i = 0; i < char.frequency; i++) {
      sorted.push(char.char);
    }
  }

  return sorted.join('');
};

console.log(
  `String after sorting characters by frequency: ${sort_character_by_frequency(
    'Programming'
  )}`
);
console.log(
  `String after sorting characters by frequency: ${sort_character_by_frequency('abcbab')}`
);
