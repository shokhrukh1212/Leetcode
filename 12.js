/*
https://leetcode.com/problems/contains-duplicate/description/
*/

const containsDuplicate = function (nums) {
  const newArr = Array.from(new Set(nums));
  return nums.length !== newArr.length;
};
