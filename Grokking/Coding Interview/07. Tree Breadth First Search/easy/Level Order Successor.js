class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const find_successor = function (root, key) {
  let queue = [root];
  let keyFound = false;

  while (queue.length) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currEl = queue.shift();

      if (keyFound) {
        return currEl;
      }

      if (currEl.val === key) {
        keyFound = true;
      }

      if (currEl.left) {
        queue.push(currEl.left);
      }

      if (currEl.right) {
        queue.push(currEl.right);
      }
    }
  }

  return null;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

result = find_successor(root, 3);
if (result) {
  console.log(result.val);
}

root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

result = find_successor(root, 9);
if (result) {
  console.log(result.val);
}

result = find_successor(root, 12);
if (result) {
  console.log(result.val);
}
