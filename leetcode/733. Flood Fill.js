var floodFill = function (image, sr, sc, color) {
  const prevColor = image[sr][sc];

  if (prevColor === color) return image;

  image[sr][sc] = color;

  if (image[sr][sc + 1] !== undefined && image[sr][sc + 1] === prevColor) {
    floodFill(image, sr, sc + 1, color);
  }

  if (image[sr][sc - 1] !== undefined && image[sr][sc - 1] === prevColor) {
    floodFill(image, sr, sc - 1, color);
  }

  if (image[sr - 1] !== undefined && image[sr - 1][sc] !== undefined && image[sr - 1][sc] === prevColor) {
    floodFill(image, sr - 1, sc, color);
  }

  if (image[sr + 1] !== undefined && image[sr + 1][sc] !== undefined && image[sr + 1][sc] === prevColor) {
    floodFill(image, sr + 1, sc, color);
  }

  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
); // [[2,2,2],[2,2,0],[2,0,1]]

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    1,
    0,
    2
  )
); // [[0,0,0],[0,0,0]]

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  )
); // [[0,0,0],[0,0,0]]
