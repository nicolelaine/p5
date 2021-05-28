

var x = 0;
var easing = 0.01;

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  // put drawing code here
var targetX = mouseX;
x+=(targetX - x) * easing;
ellipse (x, 40, 12, 12);
print (targetX + ":" + x);
}