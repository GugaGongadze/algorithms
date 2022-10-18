/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = Number.MIN_SAFE_INTEGER;

  if (height.length < 2) return 0;

  let low = 0;
  let high = height.length - 1;

  while (low < high) {
    const area = (high - low) * Math.min(height[low], height[high]);

    maxArea = Math.max(maxArea, area);

    if (height[low] < height[high]) {
      low++;
    } else {
      high--;
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([1, 2, 4, 3])); // 4
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 25, 7])); // 49
console.log(maxArea([2, 3, 10, 5, 7, 8, 9])); // 36
