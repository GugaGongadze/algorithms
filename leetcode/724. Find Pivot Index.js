/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);

  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const left = i > 0 ? nums[i - 1] : 0;
    counter += left;
    const right = sum - (counter + num);

    if (counter === right) return i;
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
