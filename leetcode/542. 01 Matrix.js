var updateMatrix = function (mat) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) continue;

      const top = mat[i - 1]?.[j] ?? Number.MAX_VALUE;
      const left = mat[i][j - 1] ?? Number.MAX_VALUE;

      mat[i][j] = Math.min(top, left) + 1;
    }
  }

  for (let i = mat.length - 1; i >= 0; i--) {
    for (let j = mat[0].length - 1; j >= 0; j--) {
      if (mat[i][j] === 0) continue;

      const bottom = mat[i + 1]?.[j] ?? Number.MAX_VALUE;
      const right = mat[i][j + 1] ?? Number.MAX_VALUE;

      mat[i][j] = Math.min(mat[i][j], Math.min(bottom, right) + 1);
    }
  }

  return mat;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
); // [[0,0,0],[0,1,0],[0,0,0]]

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
); // [[0,0,0],[0,1,0],[1,2,1]]

console.log(
  updateMatrix([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 0],
  ])
); // [[0,0,0],[0,1,0],[1,2,1]]

console.log(
  updateMatrix([
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  ])
); // [[0,0,0],[0,1,0],[1,2,1]]
