function ListNode(val) {
  this.val = val;
  this.next = null;
}

var hasCycle = function (head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = slow.next;

  while (fast) {
    if (slow === fast) return true;

    if (!fast.next) return false;

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};
