/**
 * https://leetcode.com/problems/power-of-two/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n, power = 0) {
  if (n === 0 || 2 ** power > n) return false;
  if (2 ** power === n) return true;
  return isPowerOfTwo(n, ++power);
};

// Bit Manipulation Solution
// let isPowerOfTwo = n => n > 0 ? !(n & n-1) : false;
