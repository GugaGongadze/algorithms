/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const squared = nums.map((num) => Math.pow(num, 2));
  const minElement = Math.min(...squared);
  const minElementIdx = squared.indexOf(minElement);

  if (minElementIdx === 0) return squared;
  if (minElementIdx === squared.length - 1) return squared.reverse();

  const res = [minElement];

  let left = minElementIdx - 1;
  let right = minElementIdx + 1;

  while (left >= 0 || right < squared.length) {
    if (squared[right] === undefined) {
      res.push(squared[left]);
      left--;
      continue;
    }

    if (squared[left] === undefined) {
      res.push(squared[right]);
      right++;
      continue;
    }

    if (squared[left] <= squared[right]) {
      res.push(squared[left]);
      left--;
    } else {
      res.push(squared[right]);
      right++;
    }
  }
  return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
console.log(sortedSquares([-3, 0, 2])); // [0, 4, 9]
