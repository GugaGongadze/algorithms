class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  stringify() {
    let res = '';

    let queue = [this];

    while (queue.length) {
      let currEl = queue.shift();
      res = `${res}${currEl.val}`;

      if (currEl.left) {
        queue.push(currEl.left);
      }

      if (currEl.right) {
        queue.push(currEl.right);
      }
    }

    return res;
  }
}

const find_permutations = function (nums) {
  if (nums.length === 0) return nums;
  if (nums.length === 1) return [nums];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    let permutations = [];

    const permRest = find_permutations([...nums.slice(0, i), ...nums.slice(i + 1)]);

    for (let j = 0; j < permRest.length; j++) {
      const permutation = permRest[j];

      permutations.push([num, ...permutation]);
    }

    result.push(...permutations);
  }

  return result;
};

const build_tree = (root, value) => {
  if (root === null) return new TreeNode(value);

  if (root.val > value) {
    root.left = build_tree(root.left, value);
  } else {
    root.right = build_tree(root.right, value);
  }

  return root;
};

const traverse = (root, nodes) => {
  if (nodes.length === 0) {
    return root;
  }

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];

    root = build_tree(root, node);
  }

  return root;
};

const find_unique_trees = function (n) {
  let values = new Array(n).fill(0).map((_, i) => i + 1);
  let perms = find_permutations(values);

  let map = {};
  let results = [];

  perms.forEach((perm) => {
    let [rootVal] = perm.splice(0, 1);

    let root = new TreeNode(rootVal);

    let tree = traverse(root, perm);
    let stringified = tree.stringify();

    if (!map[stringified]) {
      results.push(traverse(root, perm));
      map[stringified] = true;
    }
  });

  return results;
};

function find_unique_trees_better(n) {
  if (n <= 0) {
    return [];
  }
  return findUnique_trees_recursive(1, n);
}

function findUnique_trees_recursive(start, end) {
  const result = [];
  // base condition, return 'null' for an empty sub-tree
  // consider n = 1, in this case we will have start = end = 1, this means we should have only one tree
  // we will have two recursive calls, findUniqueTreesRecursive(1, 0) & (2, 1)
  // both of these should return 'null' for the left and the right child
  if (start > end) {
    result.push(null);
    return result;
  }

  for (let i = start; i < end + 1; i++) {
    // making 'i' the root of the tree
    const leftSubtrees = findUnique_trees_recursive(start, i - 1);
    const rightSubtrees = findUnique_trees_recursive(i + 1, end);
    for (let p = 0; p < leftSubtrees.length; p++) {
      for (let q = 0; q < rightSubtrees.length; q++) {
        const root = new TreeNode(i, leftSubtrees[p], rightSubtrees[q]);
        result.push(root);
      }
    }
  }

  return result;
}

// console.log(`Total trees: ${find_unique_trees(2)}`);
console.log(`Total trees: ${find_unique_trees_better(3)}`);
