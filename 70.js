/**
 * https://leetcode.com/problems/summary-ranges/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */

const summaryRanges = function (nums) {
  let start = 0,
    prev = 0;
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] === nums[prev] + 1) {
      prev = i;
    } else {
      if (start + 1 === i) result.push(`${nums[start]}`);
      else result.push(`${nums[start]}->${nums[prev]}`);

      start = i;
      prev = i;
    }
  }

  return result;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
// [ '0', '2->4', '6', '8->9' ]
