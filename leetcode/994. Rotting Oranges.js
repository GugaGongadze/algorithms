function getFreshRottenCount(grid) {
  let freshCount = 0;
  let rottenCount = 0;

  const queue = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        freshCount++;
      }

      if (grid[i][j] === 2) {
        rottenCount++;
        queue.push([i, j, 0]);
      }
    }
  }

  return [freshCount, rottenCount, queue];
}

function rotNeighborOranges(i, j, grid, queue, level) {
  let replacements = 0;

  if (grid[i][j + 1] === 1) {
    grid[i][j + 1] = 2;
    queue.push([i, j + 1, level + 1]);
    replacements++;
  }

  if (grid[i][j - 1] === 1) {
    grid[i][j - 1] = 2;
    queue.push([i, j - 1, level + 1]);
    replacements++;
  }

  if (grid[i - 1] && grid[i - 1][j] === 1) {
    grid[i - 1][j] = 2;
    queue.push([i - 1, j, level + 1]);
    replacements++;
  }

  if (grid[i + 1] && grid[i + 1][j] === 1) {
    grid[i + 1][j] = 2;
    queue.push([i + 1, j, level + 1]);
    replacements++;
  }

  return replacements;
}

var orangesRotting = function (grid) {
  let [freshCount, rottenCount, rottenQueue] = getFreshRottenCount(grid);

  if (freshCount === 0) return 0;
  if (rottenCount === 0) return -1;

  let minutesTaken = 0;

  while (rottenQueue.length) {
    const [i, j, level] = rottenQueue.shift();

    minutesTaken = Math.max(level, minutesTaken);

    freshCount -= rotNeighborOranges(i, j, grid, rottenQueue, level);
  }

  return freshCount === 0 ? minutesTaken : -1;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
); // 4
console.log(orangesRotting([([2, 1, 1], [0, 1, 1], [1, 0, 1])])); // -1
console.log(orangesRotting([[0, 2]])); // 0
console.log(orangesRotting([[1, 2]])); // 1
console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 2],
  ])
); // 2
