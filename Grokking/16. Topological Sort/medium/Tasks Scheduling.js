const is_scheduling_possible = function (tasks, prerequisites) {
  if (tasks <= 0) return false;

  const sortedOrder = [];

  const inDegree = new Array(tasks).fill(0);
  const graph = new Array(tasks).fill(0).map(() => new Array());

  for (const prerequisite of prerequisites) {
    let [parent, child] = prerequisite;
    graph[parent].push(child);
    inDegree[child]++;
  }

  let sources = [];

  for (let idx = 0; idx < inDegree.length; idx++) {
    if (inDegree[idx] === 0) {
      sources.push(idx);
    }
  }

  while (sources.length) {
    let vertex = sources.shift();

    sortedOrder.push(vertex);

    for (const child of graph[vertex]) {
      inDegree[child]--;

      if (inDegree[child] === 0) {
        sources.push(child);
      }
    }
  }

  return sortedOrder.length === tasks;
};

console.log(
  `Is scheduling possible: ${is_scheduling_possible(3, [
    [0, 1],
    [1, 2],
  ])}`
);
console.log(
  `Is scheduling possible: ${is_scheduling_possible(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ])}`
);
console.log(
  `Is scheduling possible: ${is_scheduling_possible(6, [
    [2, 5],
    [0, 5],
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
  ])}`
);
