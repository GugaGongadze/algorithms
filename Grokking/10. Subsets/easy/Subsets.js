const find_subsets = function (nums) {
  let subsets = [[]];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    let newSubsets = [];

    for (let j = 0; j < subsets.length; j++) {
      const subset = subsets[j];

      newSubsets.push(subset.concat(num));
    }

    subsets.push(...newSubsets);
  }

  return subsets;
};

console.log(`Here is the list of subsets: ${find_subsets([1, 3])}`);
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3])}`);
