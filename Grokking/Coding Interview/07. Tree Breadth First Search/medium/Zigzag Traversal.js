class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  let result = [];
  let queue = [root];
  let leftToRight = true;

  while (queue.length) {
    let levelSize = queue.length;
    let currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (leftToRight) {
        currentLevel.push(currentNode.value);
      } else {
        currentLevel.unshift(currentNode.value);
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    result.push(currentLevel);
    leftToRight = !leftToRight;
  }

  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(`Zigzag traversal: ${traverse(root)}`);
