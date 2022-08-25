//canvas

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
let radius = 70;

context.beginPath();
context.arc(95, 50, 40, 0, 2 * Math.PI);
context.fillStyle = "green";
context.fill();
context.lineWidth = 5;
context.strokeStyle = "#003300";
context.stroke();

//class

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, 2 * Math.PI);
    context.fillStyle = this.fillColor;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#003300";
    context.stroke();
  }
}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
c1.draw();

//running every 100ms
function generateRandom(maxLimit = 100) {
  let rand = Math.random() * maxLimit;
  console.log(rand); // say 99.81321410836433

  rand = Math.floor(rand); // 99

  return rand;
}
let t = setInterval(drawCircle, 1000);
let countInterval = 0;
function drawCircle() {
  console.log("hello");
  countInterval++;
  console.log(countInterval);
  const x = generateRandom();
  const y = generateRandom();
  const radius = generateRandom();
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const circle = new Circle(x, y, radius, 0, 2 * Math.PI, `#${randomColor}`);
  circle.draw();
  if (countInterval > 3) {
    clearInterval(t);
  }
}
