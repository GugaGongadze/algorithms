class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = (root, sum, path) => {
  if (!root) return null;

  let isLeaf = !root.left && !root.right;

  if (isLeaf && root.value !== sum) return null;

  if (isLeaf && root.value === sum) return [...path, root.value];

  let result = [];

  const leftPath = traverse(root.left, sum - root.value, [...path, root.value]);

  if (leftPath) {
    result.push(leftPath);
  }

  const rightPath = traverse(root.right, sum - root.value, [...path, root.value]);

  if (rightPath) {
    result.push(rightPath);
  }

  return result;
};

const find_paths = function (root, sum) {
  return traverse(root, sum, []);
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
sum = 23;
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`);
