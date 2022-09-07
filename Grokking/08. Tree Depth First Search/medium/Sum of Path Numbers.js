class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = (root, num, results) => {
  if (!root.left && !root.right) {
    results.push(num * 10 + root.value);
  }

  if (root.left) {
    traverse(root.left, num * 10 + root.value, results);
  }

  if (root.right) {
    traverse(root.right, num * 10 + root.value, results);
  }
};

const find_sum_of_path_numbers = function (root) {
  let nums = [];

  traverse(root, 0, nums);

  return nums.reduce((acc, curr) => acc + curr, 0);
};

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);
