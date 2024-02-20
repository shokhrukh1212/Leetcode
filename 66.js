/**
 * https://leetcode.com/problems/search-in-a-binary-search-tree/?envType=study-plan-v2&envId=leetcode-75
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
 * @param {number} val
 * @return {TreeNode}
 */

/**
 * Binary Search Tree has following:
 * 1. For any given X node, its left children and its descendants are less than X node's value
 * 2. For any given X node, its right children and its descendants are greater than X node's value
 */

const searchBST = function (root, val) {
  if (root === null || root.val === val) return root;

  if (root.val > val) return searchBST(root.left, val);
  else return searchBST(root.right, val);
};
