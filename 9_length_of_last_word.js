// https://leetcode.com/problems/length-of-last-word
var lengthOfLastWord = function (s) {
  let str = s.trim();
  let newStr = str.split(" ");
  let result = newStr.reverse();
  return result[0].length;
};
