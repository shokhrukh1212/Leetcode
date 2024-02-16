/**
 * https://leetcode.com/problems/find-pivot-index/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const pivotIndex = function (nums) {
  // sum of array elements
  const sumOfNums = nums.reduce((sum, current) => sum + current, 0);

  // checking if pivot is on the left edge
  if (sumOfNums - nums[0] === 0) return 0;

  const sumIndex = [];
  sumIndex[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // calculating right most sum, it doesn't include nums[i] itself
    const rightMostSum = sumOfNums - sumIndex[i - 1] - nums[i];

    // if right most sum is equal to left most sum which is sumIndex[i-1]
    // we can return index
    if (rightMostSum === sumIndex[i - 1]) return i;
    // otherwise, we should calculate sumIndex for index i and move on
    else sumIndex[i] = sumIndex[i - 1] + nums[i];
  }

  // if there is no index, return -1
  return -1;
};

console.log(pivotIndex([2, 1, -1]));
// 0
