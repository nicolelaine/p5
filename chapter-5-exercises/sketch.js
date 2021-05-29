

var x = 0;
var y =0;
var px = 0;
var py = 0;
var easing = 0.05;

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  stroke (0, 102);
}

function draw() {
  // put drawing code here
var targetX = mouseX;
x+=(targetX - x) * easing;
var targetY = mouseY;
y+= (targetY - y) * easing;
var weight = dist(x, y, px, py);
strokeWeight (weight);
line (x, y, px, py);
py = y;
px = x;
}