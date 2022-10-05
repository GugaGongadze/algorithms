const find_trees = function (nodes, edges) {
  const connections = new Array(nodes).fill(0).map(() => new Array());

  for (const edge of edges) {
    const [first, second] = edge;

    connections[first].push(second);
    connections[second].push(first);
  }

  let roots = [];
  let minLevel = Number.MAX_SAFE_INTEGER;

  for (let idx = 0; idx < connections.length; idx++) {
    const connection = connections[idx];
    const sortedGraph = [];
    const covered = {};
    let level = 1;

    const queue = [[idx, connection, level]];

    while (queue.length) {
      const [node, edges, currentLevel] = queue.shift();
      level = currentLevel;
      covered[node] = true;
      sortedGraph.push(node);
      for (const edge of edges) {
        if (!covered[edge]) {
          queue.push([edge, connections[edge], currentLevel + 1]);
        }
      }
    }

    if (level === minLevel) {
      roots.push(idx);
    } else if (level < minLevel) {
      roots = [idx];
      minLevel = level;
    }
  }

  return roots;
};

console.log(
  `Roots of MHTs: ${find_trees(5, [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 4],
  ])}`
);
console.log(
  `Roots of MHTs: ${find_trees(4, [
    [0, 1],
    [0, 2],
    [2, 3],
  ])}`
);
console.log(
  `Roots of MHTs: ${find_trees(4, [
    [0, 1],
    [1, 2],
    [1, 3],
  ])}`
);
