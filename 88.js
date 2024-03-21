/**
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/?envType=study-plan-v2&envId=top-interview-150
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

const averageOfLevels = function (root) {
  const result = [];
  const queue = [];

  if (!root) return result;
  queue.push(root);
  while (queue.length > 0) {
    const n = queue.length;
    let sum = 0.0;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(sum / n);
  }
  return result;
};
