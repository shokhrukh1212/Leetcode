/**
 * https://leetcode.com/problems/maximum-product-of-three-numbers/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function (nums) {
  let max1 = (max2 = max3 = -Infinity);
  let min1 = (min2 = Infinity);

  // finding 2 max numbers
  for (let num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    // finding 2 min numbers
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};

console.log(maximumProduct([1, 2, 3, 4]));
// 24
