const Heap = require('collections/heap');

const rearrange_string = function (str) {
  let freq_map = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char in freq_map) {
      freq_map[char] += 1;
    } else {
      freq_map[char] = 1;
    }
  }

  let result = [];

  let max_heap = new Heap(str.split(''), null, (a, b) => freq_map[a] - freq_map[b]);
  let min_heap = new Heap(str.split(''), null, (a, b) => freq_map[b] - freq_map[a]);

  for (let i = 0; i < str.length; i++) {
    let max_el = max_heap.pop();
    let min_el = min_heap.pop();

    let max_el_freq = freq_map[max_el];
    let min_el_freq = freq_map[min_el];

    if (max_el_freq > min_el_freq) {
      if (result[i - 1] === max_el) return '';
      result.push(max_el);
      min_heap.push(min_el);
      freq_map[max_el] -= 1;
    } else if (max_el_freq < min_el_freq) {
      if (result[i - 1] === min_el) return '';
      result.push(min_el);
      max_heap.push(max_el);
      freq_map[min_el] -= 1;
    } else {
      if (result[i - 1] === max_el) {
        result.push(min_el);
        max_heap.push(max_el);
        freq_map[min_el] -= 1;
      } else {
        result.push(max_el);
        min_heap.push(min_el);
        freq_map[max_el] -= 1;
      }
    }
  }

  return result.join('');
};

function rearrange_string2(str) {
  charFrequencyMap = {};
  for (i = 0; i < str.length; i++) {
    const chr = str[i];
    if (!(chr in charFrequencyMap)) {
      charFrequencyMap[chr] = 1;
    } else {
      charFrequencyMap[chr]++;
    }
  }

  const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  // add all characters to the max heap
  Object.keys(charFrequencyMap).forEach((char) => {
    maxHeap.push([charFrequencyMap[char], char]);
  });

  let previousChar = null,
    previousFrequency = 0,
    resultString = [];
  while (maxHeap.length > 0) {
    const [frequency, char] = maxHeap.pop();
    // add the previous entry back in the heap if its frequency is greater than zero
    if (previousChar !== null && previousFrequency > 0) {
      maxHeap.push([previousFrequency, previousChar]);
    }
    // append the current character to the result string and decrement its count
    resultString.push(char);
    previousChar = char;
    previousFrequency = frequency - 1; // decrement the frequency
  }

  // if we were successful in appending all the characters to the result string, return it
  if (resultString.length === str.length) {
    return resultString.join('');
  }
  return '';
}

console.log(`Rearranged string: ${rearrange_string2('aappp')}`);
console.log(`Rearranged string: ${rearrange_string('Programming')}`);
console.log(`Rearranged string: ${rearrange_string('aapa')}`);
