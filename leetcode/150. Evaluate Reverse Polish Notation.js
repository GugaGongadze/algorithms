function evaluate(op1, op2, operator) {
  switch (operator) {
    case '+':
      return op1 + op2;
    case '-':
      return op1 - op2;
    case '/': {
      const result = op1 / op2;

      return result < 0 ? Math.ceil(result) : Math.floor(result);
    }
    case '*':
      return op1 * op2;
  }
}

var evalRPN = function (tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      const op2 = stack.pop();
      const op1 = stack.pop();

      stack.push(evaluate(op1, op2, token));
    }
  }

  return stack[0];
};

console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log(evalRPN(['4', '13', '5', '/', '+'])); // 6
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])); // 22
