var nums = [3, 2, 3];

var twoSum = function (nums, target) {
  let returnArray = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
  return null;
};

console.log(twoSum(nums, 6));
