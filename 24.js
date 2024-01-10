/**
 * https://leetcode.com/problems/palindrome-linked-list/
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
 * @return {boolean}
 */

const isPalindrome = function (head) {
  // example with 1 -> 2 -> 2 -> 1
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next; // moves forward 1 step, 2 -> 1 at the end
    fast = fast.next.next; // moves forward 2 steps, null at the end
  }

  fast = head; // 1 -> 2 -> 2 -> 1
  slow = reverseLinkedList(slow); // was 2 -> 1 and now 1 -> 2

  while (slow) {
    if (slow.val !== fast.val) return false; // if values are not equal, not palindrome
    slow = slow.next;
    fast = fast.next;
  }

  return true; // if all steps are passed, list is palindrome
};

const reverseLinkedList = (head) => {
  let previous = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};
