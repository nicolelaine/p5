

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  background (204)
 
}

function draw() {
  // put drawing code here
  
  translate (mouseX, mouseY);
  scale (mouseX / 60.0);
  rect (-15, -15, 30, 30);
}