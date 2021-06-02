var x = 215;


function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here


if (keyIsPressed) {
  if (keyCode == LEFT_ARROW) {
    x--;
  }
  else if (keyCode == RIGHT_ARROW) {
    x++;
  }
}
rect (x, 45, 50, 50);
}