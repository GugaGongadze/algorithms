var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) return right; // p and q are in the right subtree
  if (!right) return left; // p and q are in the left subtree
  return root; // p is in one side and q is in the other
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const a = new TreeNode(3);
a.left = new TreeNode(5);
a.left.left = new TreeNode(6);
a.left.right = new TreeNode(2);
a.left.right.left = new TreeNode(7);
a.left.right.right = new TreeNode(4);
a.right = new TreeNode(1);
a.right.left = new TreeNode(0);
a.right.right = new TreeNode(8);

console.log(lowestCommonAncestor(a, a.left, a.left.right.right));
