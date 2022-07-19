var reverse = function (x) {
  let newStr = "";
  if (x < (-2) ** 31 - 1 || x > 2 ** 31) {
    return 0;
  } else {
    let str = x.toString();
    for (let i = str.length - 1; i >= 0; i--) {
      if (i === 0 && str[i] === "-") {
        newStr += "-" + newStr;
      } else {
        newStr += str[i];
      }
    }
  }
  const rev = parseInt(newStr);
  if (rev < (-2) ** 31 - 1 || rev > 2 ** 31) {
    return -1;
  }
  return rev;
};

console.log(reverse(-1234));
// console.log(reverse(1234));

// const reverse = function (x) {
//   const result = x.toString().split("").reverse().join("");
//   if (result.startsWith("-")) {
//     result = "-" + result;
//     return parseInt(result);
//   } else {
//     return parseInt(result);
//   }
// };

// console.log(reverse(-12345));

// var reverse = function (x) {
//   let holder = 0;
//   const neg = x < 0;
//   const MAX_NUMBER = Math.pow(2, 31) - 1;
//   const MIN_NUMBER = Math.pow(-2, 31);

//   while (x !== 0) {
//     const pop = x % 10;
//     x = neg ? Math.ceil(x / 10) : Math.floor(x / 10);

//     holder = holder * 10 + pop;

//     if (holder >= MAX_NUMBER || holder <= MIN_NUMBER) return 0;
//   }

//   return holder;
// };
