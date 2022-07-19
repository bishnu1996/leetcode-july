var maxSubArray = function (nums) {
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let arr = nums[i];
    arr = Math.max(nums[i], nums[i] + nums[i - 1]);
    sum = Math.max(sum, nums[i]);
    // nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    // sum = Math.max(sum, nums[i]);
  }
  return sum;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
