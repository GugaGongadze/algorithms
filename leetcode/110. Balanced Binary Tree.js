function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function getTreeHeight(root) {
  if (!root) return 0;

  return Math.max(getTreeHeight(root.left), getTreeHeight(root.right)) + 1;
}

var isBalanced = function (root) {
  if (!root || (!root.left && !root.right)) return true;

  if (!root.left) {
    return getTreeHeight(root.right) === 1;
  }

  if (!root.right) {
    return getTreeHeight(root.left) === 1;
  }

  if (!isBalanced(root.left)) return false;
  if (!isBalanced(root.right)) return false;

  return Math.abs(getTreeHeight(root.left) - getTreeHeight(root.right)) < 2;
};

const a = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const b = new TreeNode(
  2,
  new TreeNode(20, new TreeNode(10, new TreeNode(5))),
  new TreeNode(7, null, new TreeNode(7, null, new TreeNode(7)))
);

console.log(isBalanced(a)); // true
