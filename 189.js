var rotate = function (nums, k) {
  const backArray = nums.slice(nums.length - k);
  const leftArray = nums.slice(0, -k);
  return backArray.concat(leftArray);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
