// const arr = [4, 9, 16, 25, 36, 49];

// const result = arr.map((element) => {
//   return Math.sqrt(element);
// });

// console.log(result);

// const result1 = arr.map((element) => {
//   return element;
// });

// console.log(result1);

// const circles = [10, 20, 30];

// const areas = circles.map((radius) => {
//   return Math.PI * radius * radius;
// });
// console.log(areas);

// const arr = [1, 3, 6, 7, 4, 9, 16, 25, 36, 49];
// const result = arr.filter((element) => {
//   return element % 2 !== 0;
// });
// console.log(result);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7, 8];

// const result = arr1.filter((Element) => {
//   if (arr2.includes(Element)) {
//     return Element;
//   }
// });
// console.log(result);

// const result1 = [...new Set([...arr1, ...arr2])];
// console.log(result1);
// rest operator , spread operator

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 4, 5, 3];

// const arr1 = [1, 2, 3, 5];
// const arr2 = [1, 2, 3, 5];

// const result3 = arr1.filter((element) => {
//   if (arr2.includes(element)) {
//     return true;
//   }
// });
// console.log(result3);
const arr1 = [1, 2, 3, 5];
//prev = 0;
const result = arr1.reduce((prev, curr) => {
  console.log(prev);
  console.log(curr);
  return prev - curr;
});
console.log(result);
