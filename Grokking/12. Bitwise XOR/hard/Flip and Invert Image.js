function flip(matrix) {
  return matrix.map((row) => row.reverse());
}

function invert(matrix) {
  return matrix.map((row) => {
    return row.map((el) => el ^ 1);
  });
}

function flip_and_invert_image(matrix) {
  return invert(flip(matrix));
}

console.log(
  flip_and_invert_image([
    [1, 0, 1],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
console.log(
  flip_and_invert_image([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ])
);
