function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  background (204)
}

function draw() {
  // put drawing code here

  rotate (mouseX / 100.0);
  rect (40, 30, 160, 20);
}