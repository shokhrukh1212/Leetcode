/**
 * https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteMiddle = function (head) {
  let prevSlow = null;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    prevSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (prevSlow === null) return null;
  prevSlow.next = slow.next;

  return head;
};
