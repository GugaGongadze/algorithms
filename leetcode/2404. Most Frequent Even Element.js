/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const map = {};

  nums.forEach((num) => {
    if (num % 2 === 0) {
      if (num in map) {
        map[num]++;
      } else {
        map[num] = 1;
      }
    }
  });

  const keys = Object.keys(map);

  if (keys.length === 0) return -1;

  let maxFrequency = 0;
  let mostFrequentElement = -1;

  for (const key of keys) {
    const frequency = map[key];
    if (maxFrequency < frequency) {
      maxFrequency = frequency;
      mostFrequentElement = Number(key);
    } else if (maxFrequency === frequency) {
      mostFrequentElement = Math.min(Number(key), mostFrequentElement);
    }
  }

  return mostFrequentElement;
};

console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1])); // 2
console.log(mostFrequentEven([4, 4, 4, 9, 2, 4])); // 4
console.log(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7])); // -1
