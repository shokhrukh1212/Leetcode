/**
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75
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
 * @return {number}
 */
const pairSum = function (head) {
  const nodes = [];

  while (head !== null) {
    nodes.push(head.val);
    head = head.next;
  }

  // 2 pointers and max value to store max value of nodes
  let p1 = 0,
    p2 = nodes.length - 1,
    max = -Infinity;

  while (p1 <= p2) {
    max = Math.max(nodes[p1] + nodes[p2], max);
    p1++;
    p2--;
  }

  return max;
};
