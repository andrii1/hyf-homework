const argsArray = process.argv.slice(2);
console.log("myArgs: ", argsArray);
const average = argsArray.reduce((a, b) => a + b, 0) / argsArray.length;
