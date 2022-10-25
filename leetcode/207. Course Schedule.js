var canFinish = function (numCourses, prerequisites) {
  const map = {};
  const visited = {};

  for (const [course, prereq] of prerequisites) {
    map[course] = map[course] || [];

    map[course].push(prereq);
  }

  function hasCycle(node) {
    if (visited[node]) return true;

    if (map[node]) {
      if (map[node].length === 0) return false;

      visited[node] = true;

      for (let val of map[node]) {
        if (hasCycle(val)) return true;
      }

      visited[node] = false;

      map[node] = [];
    }

    return false;
  }

  for (let key in map) {
    if (hasCycle(key)) return false;
  }
  return true;
};

console.log(canFinish(2, [[1, 0]])); // true

console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
); // false

console.log(
  canFinish(3, [
    [2, 1],
    [1, 0],
  ])
); // true

console.log(
  canFinish(5, [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ])
); // true
