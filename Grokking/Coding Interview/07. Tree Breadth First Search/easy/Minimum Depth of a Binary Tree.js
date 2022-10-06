class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_minimum_depth = function (root) {
  let queue = [root];
  let level = 1;

  while (queue.length) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currEl = queue.shift();

      if (!currEl.left && !currEl.right) {
        return level;
      }

      if (currEl.left) {
        queue.push(currEl.left);
      }

      if (currEl.right) {
        queue.push(currEl.right);
      }
    }

    level++;
  }

  return level;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
