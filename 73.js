/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
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
 * @return {number[]}
 */
const postorderTraversal = function (root) {
  const values = [];
  getValues(root, values);

  function getValues(root, values) {
    if (root === null) return null;

    getValues(root.left, values);
    getValues(root.right, values);

    values.push(root.val);
  }

  return values;
};
