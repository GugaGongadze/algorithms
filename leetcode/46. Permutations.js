var permute = function (nums) {
  function permuteRecursive(nums, idx) {
    if (idx > nums.length - 1) return [];
    if (idx === nums.length - 1) return [[nums[idx]]];

    const restPerms = permuteRecursive(nums, idx + 1);

    const result = [];

    const num = nums[idx];

    for (let i = 0; i < restPerms.length; i++) {
      for (let j = 0; j < restPerms[i].length + 1; j++) {
        const perm = restPerms[i];

        const newPerm = [...perm.slice(0, j), num, ...perm.slice(j)];
        result.push(newPerm);
      }
    }

    return result;
  }

  return permuteRecursive(nums, 0);
};

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]
console.log(permute([5, 4, 6, 2])); // [[5,4,6,2],[5,4,2,6],[5,6,4,2],[5,6,2,4],[5,2,4,6],[5,2,6,4],[4,5,6,2],[4,5,2,6],[4,6,5,2],[4,6,2,5],[4,2,5,6],[4,2,6,5],[6,5,4,2],[6,5,2,4],[6,4,5,2],[6,4,2,5],[6,2,5,4],[6,2,4,5],[2,5,4,6],[2,5,6,4],[2,4,5,6],[2,4,6,5],[2,6,5,4],[2,6,4,5]]
