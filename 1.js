/**
 * https://leetcode.com/problems/maximum-subarray/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// solution by Kadane’s Algorithm (https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/)
const maxSubArray = function (nums) {
  let max_so_far = -Infinity;
  let max_ending_here = 0;

  for (let num of nums) {
    max_ending_here += num;

    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
    }

    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
  }

  return max_so_far;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// 6
