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

function maxDepth(root) {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

var diameterOfBinaryTree = function (root) {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  const currDiameter = leftDepth + rightDepth;

  const diameterOfLeft = diameterOfBinaryTree(root.left);
  const diameterOfRight = diameterOfBinaryTree(root.right);

  return Math.max(diameterOfLeft, diameterOfRight, currDiameter);
};

console.log(diameterOfBinaryTree(root));
