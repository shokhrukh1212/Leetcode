/**
 * https://leetcode.com/problems/third-maximum-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  // first max always exists as nums length is greater than 1
  const firstMax = Math.max(...nums);

  // finding second max number
  const secondMax = Math.max(...nums.filter((item) => item != firstMax));
  if (secondMax === -Infinity) {
    // if it is -Infinity, return firstMax
    return firstMax;
  } else {
    const thirdMax = Math.max(
      ...nums.filter((item) => item !== firstMax && item !== secondMax)
    );
    if (thirdMax === -Infinity) {
      // if third max is -Infinity, return first max per rules
      return firstMax;
    } else {
      // otherwise, which means it exists, return it
      return thirdMax;
    }
  }
};

console.log(thirdMax([1, 2]));
// 2
