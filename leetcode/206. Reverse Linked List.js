function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
  if (!head || !head.next) return head;

  let curr = head;
  let next = curr.next;

  curr.next = null;

  while (next) {
    let temp = next.next;

    next.next = curr;
    curr = next;
    next = temp;
  }

  return curr;
};

function reverseListRecursive(head, tail = null) {
  if (!head) return head;

  if (!head.next) {
    head.next = tail;

    return head;
  }

  let temp = head.next;
  head.next = tail;
  return reverseListRecursive(temp, head);
}

const a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(reverseListRecursive(a));
