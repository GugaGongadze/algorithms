const Heap = require('collections/heap');

class FrequencyStack {
  constructor() {
    this.sequenceNumber = 0;
    this.frequency_map = {};

    this.stack = new Heap([], null, (a, b) => {
      // higher frequency wins
      if (a.frequency !== b.frequency) {
        return a.frequency - b.frequency;
      }
      // if both elements have same frequency, return the element that was pushed later
      return a.sequenceNumber - b.sequenceNumber;
    });
  }

  push(num) {
    if (num in this.frequency_map) {
      this.frequency_map[num] += 1;
    } else {
      this.frequency_map[num] = 1;
    }

    this.stack.push({
      num,
      frequency: this.frequency_map[num],
      sequenceNumber: this.sequenceNumber,
    });
    this.sequenceNumber += 1;
  }

  pop() {
    let { num } = this.stack.pop();

    if (this.frequency_map[num] > 1) {
      this.frequency_map[num] -= 1;
    } else {
      delete this.frequency_map[num];
    }

    return num;
  }
}

var frequencyStack = new FrequencyStack();
frequencyStack.push(1); // 0
frequencyStack.push(2); // 1
frequencyStack.push(3); // 2
frequencyStack.push(2); // 2
frequencyStack.push(1); // 3
frequencyStack.push(2); // 4
frequencyStack.push(5); // 6
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
