/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {};

  for (const num of nums) {
    if (num in map) return true;
    map[num] = true;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true;
console.log(containsDuplicate([1, 2, 3, 4])); // false;
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true;
