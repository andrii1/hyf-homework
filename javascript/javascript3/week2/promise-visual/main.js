const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
//I got stuck here....
// function to move boxes
function moveElement(boxToMove, newPosition) {
  return new Promise((resolve) => {
    boxToMove.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    boxToMove.addEventListener("transitionend", resolve);
  });
}

// original position of boxes
const origin = { x: 0, y: 0 };

// target position to move
const redBoxTarget = { x: 20, y: 300 };
const blueBoxTarget = moveElement(blueBox, { x: 400, y: 300 });
const greenBoxTarget = moveElement(greenBox, { x: 400, y: 20 });

function translateOneByOne() {
  moveElement(redBox, redBoxTarget)
    .then(() => {
      console.log("moved red Box");
    })
    .then(() => moveElement(blueBox, blueBoxTarget))
    .then(() => {
      console.log("moved blue Box");
    })
    .then(() => moveElement(greenBox, greenBoxTarget))
    .then(() => {
      console.log("moved green Box");
    });

  //back to the original position
  Promise.all([
    moveElement(redBox, origin),
    moveElement(blueBox, origin),
    moveElement(greenBox, origin),
  ]).then(() => {
    console.log("all Boxes moved to it's origin");
  });

  // calling all at once function

  translateAllAtOnce();
}
translateOneByOne();

function translateAllAtOnce() {
  Promise.all([
    moveElement(redBox, redBoxTarget),
    moveElement(blueBox, blueBoxTarget),
    moveElement(greenBox, greenBoxTarget),
  ]).then(() => {
    console.log("moved all Boxes together");
  });
}
