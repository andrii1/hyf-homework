const argsArray = process.argv.slice(2);
//check if there are any parameters
if (argsArray.length === 0) {
  console.log("Please enter some numbers");
}
//check if numbers
else if (!onlyNumbers(argsArray)) {
  console.log("Only numbers are accepted!");
} else {
  const arrayNumbers = argsArray.map(Number);
  console.log("myArgs: ", arrayNumbers);
  const average = arrayNumbers.reduce((a, b) => a + b, 0) / arrayNumbers.length;
  console.log("average: ", average);
}
//function to check if numbers
function onlyNumbers(array) {
  return array.every((element) => {
    return !isNaN(element);
  });
}
