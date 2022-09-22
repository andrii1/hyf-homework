const argsArray = process.argv.slice(2);
const arrayNumbers = argsArray.map(Number);
console.log("myArgs: ", arrayNumbers);
const average = arrayNumbers.reduce((a, b) => a + b, 0) / arrayNumbers.length;
console.log("average: ", average);
