// 1.1 DOUBLING OF NUMBERS

let numbers = [1, 2, 3, 4];
//let newNumbers = [];
const newNumbers = numbers
  .filter((number) => number % 2 !== 0)
  .map((number) => number * 2);

console.log("The doubled numbers are", newNumbers); // [2, 6]

// 1.2 WORKING WITH MOVIES
