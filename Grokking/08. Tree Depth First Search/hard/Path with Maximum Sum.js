class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let max = -Infinity;

const traverse = (root) => {
  if (!root) return 0;

  if (!root.left && !root.right) return root.value;

  let leftValue = traverse(root.left);
  let rightValue = traverse(root.right);

  let currSum = root.value + leftValue + rightValue;

  max = Math.max(max, currSum);

  return Math.max(leftValue, rightValue) + root.value;
};

const find_maximum_path_sum = function (root) {
  traverse(root);
  let maxValue = max;
  max = -Infinity;
  return maxValue;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);

root = new TreeNode(-1);
root.left = new TreeNode(-3);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);
