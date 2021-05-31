
var x = 80;
var y = 30;
var w = 80;
var h = 60;


function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
background (204);

if ((mouseX > x) && (mouseX < x+w) &&
(mouseY > y) && (mouseY < y+h)) {
  fill (0);
}
else {
  fill (255);
}
  rect (x, y, w,h);
}