const find_subsets = function (nums) {
  nums.sort((a, b) => a - b);

  let subsets = [[]];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    let newSubsets = [];

    let startingIdx = 0;

    if (nums.indexOf(num) !== i) {
      startingIdx = Math.pow(2, i - 1);
    }

    for (let j = startingIdx; j < subsets.length; j++) {
      const subset = subsets[j];

      newSubsets.push(subset.concat(num));
    }

    subsets.push(...newSubsets);
  }

  return subsets;
};

console.log(`Here is the list of subsets: ${find_subsets([1, 3, 3])}`);
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3, 3])}`);
