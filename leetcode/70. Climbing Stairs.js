var climbStairs = function (n) {
  if (n <= 2) return n;

  let n1 = 1;
  let n2 = 2;

  for (let i = 3; i <= n; i++) {
    let temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }

  return n2;
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8
console.log(climbStairs(6)); // 13
console.log(climbStairs(38)); // 13
