var plusOne = function (digits) {
  let arr = digits.join("");
  let res = parseInt(arr) + 1;
  let result = res.toString();
  let result1 = result.split(``);
  console.log(result1);
};

plusOne([1, 2, 3, 6]);


