function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var serialize = function (root) {
  if (!root) return '';

  const queue = [root];
  const result = [];

  while (queue.length) {
    const element = queue.shift();

    if (element === null) {
      result.push('null');
      continue;
    }

    result.push(element.val);
    queue.push(element.left, element.right);
  }

  for (var i = result.length - 1; i >= 0; i--) {
    if (result[i] !== 'null') break;

    result.splice(i, 1);
  }

  return result.toString();
};

var deserialize = function (str) {
  if (str === '') return null;

  const data = str.split(',');
  const root = new TreeNode(parseInt(data[0], 10));

  const queue = [root];

  for (let i = 1; i < data.length; i++) {
    const parent = queue.shift();

    if (data[i] !== 'null') {
      const left = new TreeNode(parseInt(data[i]));
      parent.left = left;
      queue.push(left);
    }

    if (data[++1] !== 'null' && i !== data.length) {
      const right = new TreeNode(parseInt(data[i]));
      parent.right = right;
      queue.push(right);
    }
  }

  return root;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

// const root = new TreeNode(5);
// root.left = new TreeNode(4);
// root.left.left = new TreeNode(3);
// root.left.left.left = new TreeNode(-1);
// root.right = new TreeNode(7);
// root.right.left = new TreeNode(2);
// root.right.left.left = new TreeNode(9);

console.log(serialize(deserialize(serialize(root))));
