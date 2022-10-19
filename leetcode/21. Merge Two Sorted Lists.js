function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

const a = new ListNode(4);
const b = new ListNode(2, a);
const c = new ListNode(1, b);

const d = new ListNode(4);
const e = new ListNode(3, a);
const f = new ListNode(1, b);

console.log(mergeTwoLists(c, f)); // [1,1,2,3,4,4]
