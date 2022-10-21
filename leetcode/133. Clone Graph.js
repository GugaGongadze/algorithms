function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = function (node) {
  if (!node) return null;

  const map = {};

  function cloneGraphRecursive(node) {
    if (map[node.val]) return map[node.val];
    const clone = new Node(node.val);
    map[node.val] = clone;

    clone.neighbors = node.neighbors.map(cloneGraphRecursive);

    return clone;
  }

  return cloneGraphRecursive(node);
};
