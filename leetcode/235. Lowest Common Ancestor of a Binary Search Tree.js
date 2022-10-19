function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var lowestCommonAncestor = function (root, p, q) {
  function findAncestors(root, element, ancestors) {
    if (!root) return null;

    const newAncestors = ancestors.concat(root);

    if (root.val === element.val) return newAncestors;

    const leftAncestors = findAncestors(root.left, element, newAncestors);
    if (leftAncestors) return leftAncestors;
    const rightAncestors = findAncestors(root.right, element, newAncestors);
    return rightAncestors;
  }

  const pAncestors = findAncestors(root, p, []);
  const qAncestors = findAncestors(root, q, []);

  const qLength = qAncestors.length;
  const pLength = pAncestors.length;
  let lastCommon = null;

  for (let i = 0; i < Math.max(qLength, pLength); i++) {
    if (qAncestors[i] === pAncestors[i]) {
      lastCommon = qAncestors[i];
    }
  }
  return lastCommon;
};

const a = new TreeNode(6);
a.left = new TreeNode(2);
a.left.left = new TreeNode(0);
a.left.right = new TreeNode(4);
a.left.right.left = new TreeNode(3);
a.left.right.right = new TreeNode(5);
a.right = new TreeNode(8);
a.right.left = new TreeNode(7);
a.right.right = new TreeNode(9);

console.log(lowestCommonAncestor(a, a.left, a.left.left));
