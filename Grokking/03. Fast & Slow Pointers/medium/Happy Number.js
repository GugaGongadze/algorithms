function getDigits(num) {
  return String(num)
    .split('')
    .map((s) => Number(s));
}

function sumOfSquares(nums) {
  return nums.map((num) => num * num).reduce((acc, curr) => acc + curr, 0);
}

function happyNumber(num) {
  return happyNumberInner(num, { [num]: true });
}

function happyNumberInner(num, map) {
  let sum = sumOfSquares(getDigits(num));

  if (sum === 1) return true;

  if (sum in map) return false;

  return happyNumberInner(sum, { ...map, [sum]: true });
}

// console.log(happyNumber(23)); // true
// console.log(happyNumber(12)); // false

function find_happy_number(num) {
  let slow = num,
    fast = num;
  while (true) {
    slow = find_square_sum(slow); // move one step
    fast = find_square_sum(find_square_sum(fast)); // move two steps
    if (slow === fast) {
      // found the cycle
      break;
    }
  }
  return slow === 1; // see if the cycle is stuck on the number '1'
}

function find_square_sum(num) {
  let sum = 0;
  while (num > 0) {
    digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(find_happy_number(23));
console.log(find_happy_number(12));
