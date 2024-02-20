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

const maxDepth = function (root) {
  const stack = [[root, 1]];
  let result = 0;

  while (stack.length > 0) {
    const [node, level] = stack.pop();

    if (node) {
      result = Math.max(level, result);

      stack.push([node.right, level + 1]);
      stack.push([node.left, level + 1]);
    }
  }

  return result;
};
