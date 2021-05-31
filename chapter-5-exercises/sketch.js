
var x = 120;
var y = 60;
var radius = 12;


function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
}

function draw() {
  // put drawing code here
background (204);

var d = dist(mouseX, mouseY, x, y);

if (d < radius) {
  radius ++;
  fill (0);
  } else {
    fill (255);
  }
  ellipse (x,y, radius, radius);
}