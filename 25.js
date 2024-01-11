/**
 * https://leetcode.com/problems/majority-element/
 * Boyer-Moore Majority Voting Algorithm
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let count = 0;
  let candidate = -1;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else {
      if (nums[i] === candidate) {
        count++;
      } else {
        count--;
      }
    }
  }

  return candidate;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// 2
