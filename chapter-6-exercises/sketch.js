function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  background (204)
}

function draw() {
  // put drawing code here

  translate (mouseX, mouseY);
  rect (0, 0, 30, 30);
}