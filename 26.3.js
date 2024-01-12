/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  // 1. Create a hash map from nums1
  let map = new Map();
  for (num of nums1) {
    if (!map.has(num)) {
      map.set(num);
    }
  }

  // return unique values from nums2
  return nums2.filter((num) => {
    if (map.has(num)) {
      map.delete(num);
    }
  });
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// [4, 9]
