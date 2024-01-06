/**
 * https://leetcode.com/problems/missing-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const n = nums.length;

  const expectedSum = (n * (n + 1)) / 2; // finding total sum of numbers from 0 to n
  const actualSum = nums.reduce((sum, num) => sum + num, 0); // find actual sum without a missing number

  return expectedSum - actualSum; // return that missing number by the difference
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// 8
