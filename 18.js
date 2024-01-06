/**
 * https://leetcode.com/problems/missing-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const length = nums.length;
  const temp = Array(length + 1).fill(0);

  for (let i = 0; i < length; i++) {
    temp[nums[i]] = 1;
  }

  for (let i = 0; i <= length; i++) {
    if (temp[i] === 0) return i;
  }

  return undefined;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// 8
