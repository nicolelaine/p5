var angle = 0.0;
var offset = 60;
var scalar = 40;
var speed = 0.05;

function setup() {
  // put setup code here
  createCanvas (240, 120);
}

function draw() {
  // put drawing code here

 background (0);
 var y1 = offset + sin (angle) * scalar;
 var y2 = offset + sin (angle + 0.4) * scalar;
 var y3 = offset + sin (angle + 0.8) * scalar;
 ellipse (80, y1, 40, 40);
 ellipse (120, y2, 40, 40);
 ellipse (160, y3, 40, 40);
 angle += speed;
}