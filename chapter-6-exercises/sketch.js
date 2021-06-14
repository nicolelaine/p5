

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  background (204)
 
}

function draw() {
  // put drawing code here
  
  push ()
  translate (mouseX, mouseY);
  rect (0, 0, 30, 30);
  pop ();
  translate (35, 10);
  rect (0, 0, 15, 15);
}