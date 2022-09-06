class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_level_averages = function (root) {
  let result = [];
  let queue = [root];

  while (queue.length) {
    let levelSize = queue.length;
    let sum = 0;

    for (let i = 0; i < levelSize; i++) {
      let currEl = queue.shift();

      sum += currEl.value;

      if (currEl.left) {
        queue.push(currEl.left);
      }

      if (currEl.right) {
        queue.push(currEl.right);
      }
    }

    result.push(sum / levelSize);
  }

  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`);
