/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
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
 * @return {number}
 */

/**
 * We can use Breadth First Solution here
 * The idea is we can go through in each breadth level and check
 * If any node is a leaf node, we can instantly return a minDepth value
 * Otherwise, which means both nodes are not a leaf node, we keep going until we reach a leaf node
 */
const minDepth = function (root) {
  if (!root) return 0;

  const queue = [root];
  let minDepth = 1;

  // bfs
  while (queue.length > 0) {
    let levelSize = queue.length;

    while (levelSize) {
      const current = queue.shift();
      if (current.left === null && current.right === null) {
        return minDepth;
      } else {
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
      }
      levelSize--;
    }

    minDepth++;
  }

  return minDepth;
};
