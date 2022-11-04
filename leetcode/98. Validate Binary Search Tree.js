function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const isValidBST = (root, min = -Infinity, max = Infinity) => {
  if (!root) return false;

  if (root.val <= min || root.val >= max) return false;

  if (!root.left && !root.right) return true;

  if (!root.left) return isValidBST(root.right, Math.max(min, root.val), max);
  if (!root.right) return isValidBST(root.left, min, Math.min(max, root.val));

  return isValidBST(root.left, min, Math.min(max, root.val)) && isValidBST(root.right, Math.max(min, root.val), max);
};
