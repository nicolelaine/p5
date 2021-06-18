var angle = 0.0;
var offset = 60;
var scalar = 30;
var speed = 0.05;

function setup() {
  // put setup code here
  createCanvas (240, 120);
  background (204);
}

function draw() {
  // put drawing code here

 var x = offset + cos (angle) * scalar;
 var y = offset + sin (angle) * scalar;
 ellipse (x, y, 40, 40);
 angle += speed;
}