//1
const showText = document.querySelector("#show-text");
const functionLog = () => {
  console.log("Hello in console");
};

const functionAlert = () => {
  alert("Hello alert");
};

const functionShowOnPage = () => {
  showText.innerText = "Hello on page";
};

const functionsArray = [functionLog, functionAlert, functionShowOnPage];

for (let i = 0; i < functionsArray.length; i++) {
  functionsArray[i]();
}
//2
function normalFunction() {
  console.log("normal function");
}
const functionAsAVariable = function () {
  console.log("function as a variable");
};

normalFunction();
functionAsAVariable();

//3
const object = {
  functionName: function () {
    return "function as an object value";
  },
};

console.log(object.functionName());
