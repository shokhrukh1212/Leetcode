/**
 * https://leetcode.com/problems/symmetric-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
  function recursiveCall(l, r) {
    if (!l && !r) return true;
    if (!l || !r || l.val !== r.val) return false;

    return recursiveCall(l.left, r.right) && recursiveCall(l.right, r.left);
  }

  return recursiveCall(root.left, root.right);
};
