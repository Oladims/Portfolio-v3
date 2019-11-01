
const numShapes = 3
const maxSize = 200

let colors = []
function setup () {
  colors = [
    color(255, 143, 0, 80),
    color(255, 128, 171, 80),
    color(255, 193, 7, 80),
    color(76, 175, 80, 80),
    color(0, 188, 212, 80),
    color(171, 71, 188, 80),
    color(239, 83, 80, 80)
  ]
  createCanvas(window.innerWidth, document.body.offsetHeight)
  noStroke()
}

function randomNumber (size) {
  return Math.floor(Math.random() * size)
}

function randomChoice (choices) {
  let index = randomNumber(choices.length)
  return choices[index]
}

function mouseClicked () {
  let sideLength = randomNumber(maxSize)
  fill(randomChoice(colors))
  let shapeType = randomNumber(numShapes)
  if (shapeType % numShapes == 0) {
    ellipse(mouseX, mouseY, sideLength, sideLength)
  } else if (shapeType % numShapes == 1) {
    rect(mouseX, mouseY, sideLength, sideLength)
  } else {
    triangle(mouseX, mouseY, mouseX + sideLength, mouseY,
      mouseX + (0.5 * sideLength), mouseY - sideLength)
  }
  // console.log("Drawing");
}

window.onresize = () => {
  resizeCanvas(window.innerWidth, document.body.offsetHeight)
}
