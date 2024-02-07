/**
 * https://leetcode.com/problems/valid-perfect-square/
 */

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (middle ** 2 === num) {
      return true;
    } else if (middle ** 2 > num) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return false;
};

console.log(isPerfectSquare(16));
// true
