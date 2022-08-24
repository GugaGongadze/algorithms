class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let result = '';
    let temp = this;
    while (temp !== null) {
      result += temp.value + ' ';
      temp = temp.next;
    }
    console.log(result);
  }
}

function findMid(head) {
  let mid = head;
  let fast = mid.next;

  while (fast && fast.next) {
    mid = mid.next;
    fast = fast.next.next;
  }

  return mid;
}

function reverse(head) {
  let prev = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

const reorder = function (head) {
  let mid = findMid(head);
  let reversed = reverse(mid);

  let pointer = 0;

  while (reversed) {
    if (pointer % 2 === 1) {
      head = head.next;
    } else {
      let topEl = reversed;
      let nextRev = topEl.next;

      if (!head) {
        break;
      }
      topEl.next = head.next;
      head.next = topEl;

      head = head.next;
      reversed = nextRev;
    }
    pointer++;
  }
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);

reorder(head);
console.log(head);
