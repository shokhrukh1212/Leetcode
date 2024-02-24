/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
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
const preorderTraversal = function (root) {
  const values = [];
  printValues(root, values);

  function printValues(root, values) {
    if (root === null) return null;

    values.push(root.data);

    printValues(root.left, values);
    printValues(root.right, values);
  }

  return values;
};
