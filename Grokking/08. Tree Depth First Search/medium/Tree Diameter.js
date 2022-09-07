class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeDiameter {
  constructor() {
    this.treeDiameter = 0;
  }

  traverse(root) {
    if (!root) return 0;

    if (!root.left && !root.right) return 1;

    let left = this.traverse(root.left);
    let right = this.traverse(root.right);

    let currDiameter = 1 + left + right;

    this.treeDiameter = Math.max(this.treeDiameter, currDiameter);

    return Math.max(left + 1, right + 1);
  }

  find_diameter(root) {
    this.traverse(root);
    return this.treeDiameter;
  }
}

var treeDiameter = new TreeDiameter();
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`);
root.left.left = null;
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
root.right.left.right.left = new TreeNode(10);
root.right.right.left.left = new TreeNode(11);
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`);
