/**
 * https://leetcode.com/problems/climbing-stairs/
 */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n, stairs = {}) {
  if (n in stairs) return stairs[n];
  if (n === 1) return 1;
  if (n === 2) return 2;

  stairs[n] = climbStairs(n - 1, stairs) + climbStairs(n - 2, stairs);
  return stairs[n];
};

console.log(climbStairs(6));
// 13
