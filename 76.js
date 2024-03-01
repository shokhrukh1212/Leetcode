/**
 * https://leetcode.com/problems/balanced-binary-tree/
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
function dfsHeight(root) {
  if (root === null) return 0;

  const leftHeight = dfsHeight(root.left);
  if (leftHeight === -1) return -1;
  const rightHeight = dfsHeight(root.right);
  if (rightHeight === -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(root) {
  return dfsHeight(root) !== -1;
}