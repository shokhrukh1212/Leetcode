/**
 * https://leetcode.com/problems/happy-number/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  if (n < 10) {
    if (n === 1 || n === 7) {
      return true;
    }
    return false;
  }
  let total = 0;
  while (n > 0) {
    let sq = n % 10;
    total += sq ** 2;
    n -= sq;
    n /= 10;
  }
  if (total === 1) {
    return true;
  }
  return isHappy(total);
};

console.log(isHappy(19));
// true
console.log(isHappy(2));
// false
