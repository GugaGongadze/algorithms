var MyQueue = function () {
  this.leftStack = [];
  this.rightStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.leftStack.length) {
    while (this.leftStack.length) {
      this.rightStack.push(this.leftStack.pop());
    }
    this.rightStack.push(x);

    while (this.rightStack.length) {
      this.leftStack.push(this.rightStack.pop());
    }
  } else {
    while (this.rightStack.length) {
      this.leftStack.push(this.rightStack.pop());
    }
    this.leftStack.push(x);

    while (this.leftStack.length) {
      this.rightStack.push(this.leftStack.pop());
    }
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.leftStack.length) return this.leftStack.pop();

  return this.rightStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.leftStack.length) return this.leftStack[this.leftStack.length - 1];

  return this.rightStack[this.rightStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.leftStack.length === 0 && this.rightStack.length === 0;
};

var obj = new MyQueue();
obj.push(1);
obj.push(2);

console.log(obj.leftStack);
console.log(obj.rightStack);
var param_2 = obj.peek();
var param_3 = obj.pop();
var param_4 = obj.empty();
