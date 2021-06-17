var radius = 40;
var x = -radius;
var speed = 0.5;

function setup() {
  // put setup code here

  createCanvas (240, 120);
  ellipseMode (RADIUS);
}

function draw() {
  // put drawing code here

  background (0);
  x += speed; // increase the value of x

  if (x > width + radius)  {  //if the shape is off screen
     x = -radius;  //move to left edge
  }
  arc (x, 60, radius, radius, 0.52, 5.76);
}