var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
  }
  nums.splice(i, nums.length - i);
  return i;
};

removeElement([3, 2, 2, 3], 3); // 2, [2,2]
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2); // 5, [0,1,3,0,4]
