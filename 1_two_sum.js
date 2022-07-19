var twoSum = function (nums, target) {
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
  // return -1;
  for (let i = 0; i < nums.length; i++) {
    const deff = target - nums[i];
    const sliceArray = nums.slice(i + 1);
    if (sliceArray.includes(deff)) {
      return [i, i + 1 + sliceArray.indexOf(deff)];
    }
  }
  return -1;
};
const arr = [2, 3, 4, 5];
const target = 9;
const result = twoSum(arr, target);
console.log(result);

// var plusOne = function (digits) {
//   let carry = 0;
//   for (let i = digits.length - 1; i >= 0; i--) {
//     carry = digits[i] + 1 == 10 ? 1 : 0;
//     if (carry == 0) {
//       digits[i] = digits[i] + 1;
//       break;
//     } else {
//       digits[i] = 0;
//     }
//   }
//   if (carry == 1) {
//     digits.unshift(1);
//   }
//   return digits;
// };
