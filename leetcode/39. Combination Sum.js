/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  function combinationSumRecursive(candidates, target, idx, result) {
    if (idx >= candidates.length) return [];

    const candidate = candidates[idx];

    if (candidate === target) {
      return [result.concat(candidate)].concat(combinationSumRecursive(candidates, target, idx + 1, result));
    }

    if (candidate > target) {
      return combinationSumRecursive(candidates, target, idx + 1, result);
    }

    const including = combinationSumRecursive(candidates, target - candidate, idx, result.concat(candidate));
    const excluding = combinationSumRecursive(candidates, target, idx + 1, result);

    if (including.length && excluding.length) {
      return [...including, ...excluding];
    }

    if (including.length) return including;

    if (excluding.length) return excluding;

    return [];
  }

  return combinationSumRecursive(candidates, target, 0, []);
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)); // []
console.log(combinationSum([8, 7, 4, 3], 11)); // []
console.log(combinationSum([4, 2, 8], 8)); // []
