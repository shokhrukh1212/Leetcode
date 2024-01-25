/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  const resultArr = [];

  nums1 = quicksort(nums1);
  nums2 = quicksort(nums2);

  // We will use 2 pointers technique
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      p1++;
    } else if (nums1[p1] > nums2[p2]) {
      p2++;
    } else {
      resultArr.push(nums1[p1]);
      p1++;
      p2++;
    }
  }

  return resultArr;

  // We will use quicksort to sort given arrays
  function quicksort(arr) {
    if (arr.length < 2) return arr;
    const left = [];
    const right = [];
    const pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) left.push(arr[i]);
      else right.push(arr[i]);
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
  }
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
[4, 9];
