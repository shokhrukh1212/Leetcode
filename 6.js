var merge = function (nums1, m, nums2, n) {
  let cnt = 0;
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[cnt];
    cnt++;
  }
  nums1.sort((a, b) => a - b);
};
