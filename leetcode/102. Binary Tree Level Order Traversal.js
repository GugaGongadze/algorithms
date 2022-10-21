function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var levelOrder = function (root) {
  if (!root) return [];
  const queue = [[root, 0]];
  const result = [];

  while (queue.length) {
    const [node, level] = queue.shift();
    result[level] = result[level] || [];
    result[level].push(node.val);

    if (node.left) {
      queue.push([node.left, level + 1]);
    }

    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }

  return result;
};

console.log(levelOrder([3, 9, 20, null, null, 15, 7])); // [[3], [9, 20], [15, 7]];
console.log(levelOrder([1])); // [[1]];
console.log(levelOrder([])); // [];
