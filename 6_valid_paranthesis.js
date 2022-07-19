const isValid = function (s) {
  const myObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (const paran of s) {
    if (myObj.hasOwnProperty(paran)) {
      stack.push(paran);
    } else {
      const openParan = stack.pop();
      if (paran !== myObj[openParan]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(isValid("(){}[}"));
