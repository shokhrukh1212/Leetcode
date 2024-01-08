/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  let newList = new ListNode(0);

  const headOfNewList = newList;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      newList.next = l1;

      l1 = l1.next;
    } else {
      newList.next = l2;

      l2 = l2.next;
    }

    newList = newList.next;
  }

  if (l1 === null) {
    newList.next = l2;
  } else if (l2 === null) {
    newList.next = l1;
  }

  return headOfNewList.next;
};
