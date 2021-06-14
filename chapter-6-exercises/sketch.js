

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  background (204)
 
}

function draw() {
  // put drawing code here
  
  translate (mouseX, mouseY);
  var scalar = mouseX / 60.0
  scale (scalar);
  strokeWeight (1.0 / scalar);
  rect (-15, -15, 30, 30);
}