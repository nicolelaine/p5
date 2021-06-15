function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  noStroke ();
}

function draw() {
  // put drawing code here
 
  translate (frameCount % width, frameCount % height); //modulo makes it so when it
  //gets to the width of the page it starts over and when it gets to the height of 
  //the page it also starts over
  rotate (radians(frameCount));
  fill (0, 0, 0, 4);  //alpha color - makes it so we can make it a bit translucent 
  rect (0, 0, 40, 40);
   
}

function mousePressed () {
  background (255); //this calls a white background, which clears everythign out
  //of the canvas
}