// https://leetcode.com/problems/search-insert-position/

// const serachIndex = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }
//   return nums.length;
// };
//console.log(serachIndex([1, 2, 5, 6], 4));

const serachIndex = function (nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
console.log(serachIndex([1, 2, 5, 6], 4));
