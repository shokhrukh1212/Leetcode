/**
 * https://leetcode.com/problems/binary-tree-paths/
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
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  const result = [];
  function dfs(root, path) {
    path.push(root.val);

    if (!root.left && !root.right) {
      result.push(path.join("->"));
    }

    if (root.left) dfs(root.left, path);
    if (root.right) dfs(root.right, path);

    path.pop();
  }

  dfs(root, []);

  return result;
};
