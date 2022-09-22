const argsArray = process.argv.slice(2);
//check if numbers
if (!onlyNumbers(argsArray)) {
  console.log("Only numbers are accepted!");
} else {
  const arrayNumbers = argsArray.map(Number);
  console.log("myArgs: ", arrayNumbers);
  const average = arrayNumbers.reduce((a, b) => a + b, 0) / arrayNumbers.length;
  console.log("average: ", average);
}

function onlyNumbers(array) {
  return array.every((element) => {
    return !isNaN(element);
  });
}
