var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.stack.push([val, val]);
  } else {
    const min = this.stack[this.stack.length - 1][1];

    if (min <= val) {
      this.stack.push([val, min]);
    } else {
      this.stack.push([val, val]);
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stack.pop()[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length === 0) return undefined;

  return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length === 0) return undefined;

  return this.stack[this.stack.length - 1][1];
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack);
console.log(minStack.getMin()); // return -3
console.log(minStack.pop());
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
