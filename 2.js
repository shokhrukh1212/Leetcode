/**
 * https://leetcode.com/problems/rotate-array/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  // if k is greater than nums.length, no need to make calculations until we go to nums.length
  k = k % nums.length;

  // reversing a whole array, example from [1,2,3,4,5,6,7] to [7,6,5,4,3,2,1]
  let left = 0;
  let right = nums.length - 1;
  nums = reverseArray(nums, left, right);

  // reversing an array from 0 to k - 1, example from [7,6,5,4,3,2,1] to [5,6,7,4,3,2,1]
  left = 0;
  right = k - 1;
  nums = reverseArray(nums, left, right);

  // reversing an array from k to nums.length - 1, example from [5,6,7,4,3,2,1] to [5,6,7,1,2,3,4]
  left = k;
  right = nums.length - 1;
  nums = reverseArray(nums, left, right);

  return nums;
};

const reverseArray = (nums, left, right) => {
  while (left < right) {
    let current = nums[left];
    nums[left] = nums[right];
    nums[right] = current;

    left++;
    right--;
  }

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// [5,6,7,1,2,3,4]
