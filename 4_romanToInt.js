const romanToInteger = function (s) {
  myMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = myMap[s[i]];
    const next = myMap[s[i + 1]];
    if (current < next) {
      result += next - current;
    } else {
      result += current;
    }
  }
  return result;
};
console.log(romanToInteger("VI"));
