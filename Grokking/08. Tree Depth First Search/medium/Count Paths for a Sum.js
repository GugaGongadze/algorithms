class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function count_paths(root, targetSum) {
  // A map that stores the number of times a prefix sum has occurred so far.
  const map = new Map();

  return count_paths_prefix_sum(root, targetSum, map, 0);
}

function count_paths_prefix_sum(node, targetSum, map, currentPathSum) {
  if (!node) return 0;

  // The number of paths that have the required sum.
  let pathCount = 0;

  // 'currentPathSum' is the prefix sum, i.e., sum of all node values from root to current node.
  currentPathSum += node.val;

  // This is the base case. If the current sum is equal to the target sum, we have found a path from root to
  // the current node having the required sum. Hence, we increment the path count by 1.
  if (targetSum === currentPathSum) pathCount++;

  //'currentPathSum' is the path sum from root to the current node. If within this path, there is a
  // valid solution, then there must be an 'oldPathSum' such that:
  // => currentPathSum - oldPathSum = targetSum
  // => currentPathSum - targetSum = oldPathSum
  // Hence, we can search such an 'oldPathSum' in the map from the key 'currentPathSum - targetSum'.
  if (map.has(currentPathSum - targetSum))
    pathCount += map.get(currentPathSum - targetSum);

  // This is the key step in the algorithm. We are storing the number of times the prefix sum
  // `currentPathSum` has occurred so far.
  map.set(currentPathSum, map.get(currentPathSum) + 1 || 1);

  // Counting the number of paths from the left and right subtrees.
  pathCount += count_paths_prefix_sum(node.left, targetSum, map, currentPathSum);
  pathCount += count_paths_prefix_sum(node.right, targetSum, map, currentPathSum);

  // Removing the current path sum from the map for backtracking.
  // 'currentPathSum' is the prefix sum up to the current node. When we go back (i.e., backtrack), then
  // the current node is no more a part of the path, hence, we should remove its prefix sum from the map.
  map.set(currentPathSum, map.get(currentPathSum) - 1);

  return pathCount;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has paths: ${count_paths(root, 11)}`);
