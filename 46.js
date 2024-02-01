/**
 * https://leetcode.com/problems/maximum-average-subarray-i/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
  let maxAverageSum = 0;
  let currentAverageSum = 0;

  // initialize the window
  for (let i = 0; i < k; i++) {
    currentAverageSum += nums[i];
  }

  maxAverageSum = currentAverageSum;

  // slide the window over the array
  for (let i = k; i < nums.length; i++) {
    currentAverageSum = currentAverageSum - nums[i - k] + nums[i];
    maxAverageSum = Math.max(currentAverageSum, maxAverageSum);
  }

  return (maxAverageSum / k).toFixed(5);
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// 12.75000
