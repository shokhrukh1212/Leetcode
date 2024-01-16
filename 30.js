/**
 * https://leetcode.com/problems/path-sum/
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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
  if (root === null) return false;

  const stack = [{ node: root, sum: root.val }];

  while (stack.length > 0) {
    const { node, sum } = stack.pop();

    if (node.left === null && node.right === null && sum === targetSum) {
      return true;
    }

    if (node.right !== null) {
      stack.push({ node: node.right, sum: sum + node.right.val });
    }

    if (node.left !== null) {
      stack.push({ node: node.left, sum: sum + node.left.val });
    }
  }

  return false;
};
