

function setup() {
  // put setup code here

  createCanvas(480, 120);
  strokeWeight(4);
  stroke(0, 102);
}

function draw() {
  // put drawing code here
 line (mouseX, mouseY, pmouseX, pmouseY);
}