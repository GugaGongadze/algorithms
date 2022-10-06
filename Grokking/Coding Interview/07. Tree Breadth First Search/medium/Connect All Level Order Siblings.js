class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // tree traversal using 'next' pointer
  print_tree() {
    let result = "Traversal using 'next' pointer: ";
    let current = this;
    while (current != null) {
      result += current.value + ' ';
      current = current.next;
    }
    console.log(result);
  }
}

const connect_all_siblings = function (root) {
  let queue = [root];

  let prevNode = null;

  while (queue.length) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currNode = queue.shift();

      if (prevNode) {
        prevNode.next = currNode;
      }

      if (currNode.left) {
        queue.push(currNode.left);
      }

      if (currNode.right) {
        queue.push(currNode.right);
      }

      prevNode = currNode;
    }
  }
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_all_siblings(root);
root.print_tree();
