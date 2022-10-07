const countMinJumps = function (jumps) {
  let i = 0;
  let counter = -1;

  while (i < jumps.length) {
    const curr = jumps[i];
    if (curr === 0) return -1;

    i += curr;
    counter++;
  }

  return counter;
};

console.log(`Minimum jumps needed: ---> ${countMinJumps([2, 1, 1, 1, 4])}`);
console.log(`Minimum jumps needed: ---> ${countMinJumps([1, 1, 3, 6, 9, 3, 0, 1, 3])}`);
