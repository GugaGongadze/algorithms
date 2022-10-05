const can_construct = function (originalSeq, sequences) {
  const edges = [];
  const uniqueElements = new Set();

  for (const sequence of sequences) {
    for (let idx = 0; idx < sequence.length; idx++) {
      const el = sequence[idx];
      const nextEl = sequence[idx + 1];

      if (!nextEl) break;

      uniqueElements.add(el);
      uniqueElements.add(nextEl);
      edges.push([el, nextEl]);
    }
  }

  const sortedGraph = [];

  const inDegree = {};
  const graph = {};

  uniqueElements.forEach((el) => {
    inDegree[el] = 0;
    graph[el] = [];
  });

  for (let idx = 0; idx < edges.length; idx++) {
    const [parent, child] = edges[idx];

    graph[parent].push(child);
    inDegree[child]++;
  }

  const sourceVertices = Object.entries(inDegree).reduce((acc, curr) => {
    const [element, frequency] = curr;

    if (frequency === 0) return [...acc, element];

    return acc;
  }, []);

  while (sourceVertices.length) {
    if (sourceVertices.length > 1) return false;

    let vertex = sourceVertices.shift();

    sortedGraph.push(vertex);

    for (const child of graph[vertex]) {
      inDegree[child] -= 1;

      if (inDegree[child] === 0) {
        sourceVertices.push(child);
      }
    }
  }

  return sortedGraph.join('') === originalSeq.join('');
};

console.log(
  `Can construct: ${can_construct(
    [1, 2, 3, 4],
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ]
  )}`
);
console.log(
  `Can construct: ${can_construct(
    [1, 2, 3, 4],
    [
      [1, 2],
      [2, 3],
      [2, 4],
    ]
  )}`
);
console.log(
  `Can construct: ${can_construct(
    [3, 1, 4, 2, 5],
    [
      [3, 1, 5],
      [1, 4, 2, 5],
    ]
  )}`
);
