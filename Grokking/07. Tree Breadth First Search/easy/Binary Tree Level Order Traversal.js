class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const traverse_level = (root, level, res) => {
  if (!res[level]) {
    res[level] = [];
  }

  res[level].push(root.val);

  if (root.left) {
    traverse_level(root.left, level + 1, res);
  }

  if (root.right) {
    traverse_level(root.right, level + 1, res);
  }
};

const traverse = function (root) {
  let result = [];

  traverse_level(root, 0, result);

  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
