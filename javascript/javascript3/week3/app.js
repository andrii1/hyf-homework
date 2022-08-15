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
