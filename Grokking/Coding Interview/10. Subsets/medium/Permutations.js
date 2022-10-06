const find_permutations = function (nums) {
  if (nums.length === 0) return nums;
  if (nums.length === 1) return [nums];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    let permutations = [];

    const permRest = find_permutations([...nums.slice(0, i), ...nums.slice(i + 1)]);

    for (let j = 0; j < permRest.length; j++) {
      const permutation = permRest[j];

      permutations.push([num, ...permutation]);
    }

    result.push(...permutations);
  }

  return result;
};

console.log(`Here are all the permutations: ${find_permutations([1, 3, 5])}`);
