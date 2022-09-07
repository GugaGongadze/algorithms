class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_path = function (root, sequence) {
  if (!root) return false;

  const curr = sequence[0];

  if (!curr) return false;

  if (!root.left && !root.right) return root.value === curr;

  let restOfSequence = sequence.slice(1);

  return find_path(root.left, restOfSequence) || find_path(root.right, restOfSequence);
};

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`);
