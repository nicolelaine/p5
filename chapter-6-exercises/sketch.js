function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  background (204)
}

function draw() {
  // put drawing code here

  translate (mouseX, mouseY);
  rect (0, 0, 30, 30);
  translate (35, 10);
  rect (0, 0, 15, 15);
}