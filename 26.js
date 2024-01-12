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
  const sorted1 = quicksort(nums1);
  const sorted2 = quicksort(nums2);

  // 2. initialize 2 pointers and result array
  let first = 0;
  let second = 0;
  const result = [];

  // 3. loop through each element of arrays
  while (first < nums1.length && second < nums2.length) {
    if (sorted1[first] === sorted2[second]) {
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
  return Array.from(new Set(result));
};

const quicksort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// [4, 9]
