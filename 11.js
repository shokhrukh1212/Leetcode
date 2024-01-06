const sortArray = (arr) => {
  return arr.sort((x, y) => x - y);
};

const singleNumber = function (nums) {
  const arr = sortArray(nums);
  for (let num = 0; num < arr.length; num++) {
    if (arr[num] !== arr[num - 1] && arr[num] !== arr[num + 1]) {
      return arr[num];
    }
  }
};
