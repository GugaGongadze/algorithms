const evaluate = (operator, left, right) => {
  switch (operator) {
    case '+':
      return parseInt(left) + parseInt(right);
    case '-':
      return parseInt(left) - parseInt(right);
    case '*':
    default:
      return parseInt(left) * parseInt(right);
  }
};

const isOperator = (character) => {
  return ['+', '-', '*'].includes(character);
};

const diff_ways_to_evaluate_expression = function (input) {
  if (input.length === 1) return [input];

  let result = [];

  for (let i = 0; i < input.length; i++) {
    const character = input[i];

    if (!isOperator(character)) continue;

    let leftSide = diff_ways_to_evaluate_expression(input.slice(0, i));
    let rightSide = diff_ways_to_evaluate_expression(input.slice(i + 1));

    for (let j = 0; j < leftSide.length; j++) {
      for (let k = 0; k < rightSide.length; k++) {
        result.push(evaluate(character, leftSide[j], rightSide[k]));
      }
    }
  }

  return result;
};

console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression('1+2*3')}`);
console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression('2*3-4-5')}`);
