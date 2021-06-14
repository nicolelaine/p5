var angle = 0.0;

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  background (204)
}

function draw() {
  // put drawing code here

  translate (mouseX, mouseY);
  rotate (angle);
  rect (-15, -15, 30, 30);
  angle += 0.1;
}