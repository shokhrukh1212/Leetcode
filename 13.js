/**
https://leetcode.com/problems/move-zeroes/description/
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let zeroCount = 0;

  // moving non zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[zeroCount] = nums[i];
      zeroCount++;
    }
  }

  // filling remaining elements with zero(s)
  while (zeroCount < nums.length) {
    nums[zeroCount] = 0;
    zeroCount++;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
// [ 1, 3, 12, 0, 0 ]
