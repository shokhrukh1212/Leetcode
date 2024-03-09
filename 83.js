/**
 * https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function (nums, fn, init) {
  let sum = init;

  for (let i of nums) {
    sum = fn(sum, i);
  }

  return sum;
};
