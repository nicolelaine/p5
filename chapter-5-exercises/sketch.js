

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  stroke(0, 102);
}

function draw() {
  // put drawing code here
var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
strokeWeight (weight);
line (mouseX, mouseY, pmouseX, pmouseY);
}