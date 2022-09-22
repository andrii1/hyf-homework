const argsArray = process.argv.slice(2);
const arrayNumbers = argsArray.map(Number);
console.log("myArgs: ", arrayNumbers);
const average = arrayNumbers.reduce((a, b) => a + b, 0) / arrayNumbers.length;
function onlyNumbers(array) {
  return array.every((element) => {
    return typeof element === "number";
  });
}
console.log(onlyNumbers(argsArray));
console.log(onlyNumbers(arrayNumbers));

console.log("average: ", average);
