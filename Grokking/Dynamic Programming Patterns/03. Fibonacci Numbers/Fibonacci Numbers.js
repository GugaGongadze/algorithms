const calculateFibonacci = function (n) {
  if (n < 2) return n;

  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

const calculateFibonacciMemo = function (n) {
  const memoize = [];

  function fib(n) {
    if (n < 2) return n;

    // if we have already solved this subproblem, simply return the result from the cache
    if (memoize[n]) return memoize[n];

    memoize[n] = fib(n - 1) + fib(n - 2);
    return memoize[n];
  }

  return fib(n);
};

const calculateFibonacciBottomUp = function (n) {
  if (n < 2) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

const calculateFibonacciBottomUpUltimate = function (n) {
  if (n < 2) return n;

  let n1 = 0;
  let n2 = 1;
  
  for (let i = 2; i <= n; i++) {
    let temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }

  return n2;
};
