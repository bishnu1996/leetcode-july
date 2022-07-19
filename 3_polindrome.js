var isPalindrome = function (x) {
  // let str = x.toString();
  // for(let i = 0;i <= str.length/2;i++){
  //     if(str[i] !== str[str.length-1-i]){
  //         return false;
  //     }
  // }
  // return true

  const rev = x.toString();
  const result = rev.split("").reverse().join("");
  return rev === result;
};
