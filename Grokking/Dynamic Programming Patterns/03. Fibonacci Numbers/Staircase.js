const countWays = function (n) {
  const memo = {};

  function countWaysRecursive(n) {
    if (n < 2) return 1;
    if (n === 2) return 2;

    if (memo[n]) return memo[n];

    memo[n] =
      countWaysRecursive(n - 1) + countWaysRecursive(n - 2) + countWaysRecursive(n - 3);

    return memo[n];
  }

  return countWaysRecursive(n);
};

const countWaysBottomUp = (n) => {
  if (n < 2) return 1;
  if (n === 2) return 2;

  let n1 = 1;
  let n2 = 1;
  let n3 = 2;

  for (let i = 3; i <= n; i++) {
    let temp = n1 + n2 + n3;
    n1 = n2;
    n2 = n3;
    n3 = temp;
  }

  return n3;
};

console.log(`Number of ways: ---> ${countWaysBottomUp(2)}`); // 2
console.log(`Number of ways: ---> ${countWaysBottomUp(3)}`); // 4
console.log(`Number of ways: ---> ${countWaysBottomUp(4)}`); // 7
console.log(`Number of ways: ---> ${countWaysBottomUp(5)}`); // 13
