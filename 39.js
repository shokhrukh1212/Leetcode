/**
 * https://leetcode.com/problems/contains-duplicate-ii/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const hashMap = new Map(); // new hashmap
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      // if hashmap has an element
      if (Math.abs(hashMap.get(nums[i]) - i) <= k) return true; // Math.abs(i - j) <= k
      hashMap.set(nums[i], i); // otherwise, update element value to a new index
    } else {
      hashMap.set(nums[i], i); // if hashmap doesn't have, set it
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
