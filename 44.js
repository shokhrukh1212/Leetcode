/**
 * https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hashMap.has(diff)) {
      return [hashMap.get(diff), i];
    } else {
      hashMap.set(nums[i], i);
    }
  }
};
