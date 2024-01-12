/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  // 1. Let's sort both arrays by using quicksort
  const sorted1 = nums1.sort((a, b) => a - b);
  const sorted2 = nums2.sort((a, b) => a - b);

  // 2. initialize 2 pointers and result array
  let first = 0;
  let second = 0;
  const result = [];

  // 3. loop through each element of arrays
  while (first < nums1.length && second < nums2.length) {
    if (
      sorted1[first] === sorted2[second] &&
      !result.includes(sorted1[first])
    ) {
      result.push(sorted1[first]);
      first++;
      second++;
    } else if (sorted1[first] < sorted2[second]) {
      first++;
    } else {
      second++;
    }
  }

  // 4. return result with unique values
  return result;
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// [4, 9]
