/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = nums.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }

    return acc;
  }, {});

  let maxElementFreq = 0;
  let maxElement = null;

  Object.entries(map).forEach(([key, value]) => {
    if (value > maxElementFreq) {
      maxElementFreq = value;
      maxElement = key;
    }
  });

  return maxElement;
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([3, 3, 4])); // 3
