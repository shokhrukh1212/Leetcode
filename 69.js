/**
 * https://leetcode.com/problems/invert-binary-tree/?envType=study-plan-v2&envId=top-interview-150
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
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!root) return null;
  if (root.left === null && root.right === null) return root;
  const leftSubtree = invertTree(root.left);
  const rightSubtree = invertTree(root.right);

  root.left = rightSubtree;
  root.right = leftSubtree;

  return root;
};
