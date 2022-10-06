class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function linkedListCycle(head) {
  if (head === null) return false;

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${linkedListCycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${linkedListCycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${linkedListCycle(head)}`);

function find_cycle_length(head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      // found the cycle
      return calculate_cycle_length(slow);
    }
  }
  return 0;
}

function calculate_cycle_length(slow) {
  let current = slow,
    cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length += 1;
    if (current === slow) {
      break;
    }
  }
  return cycle_length;
}
