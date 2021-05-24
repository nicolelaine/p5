function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
   colorMode(HSB, 360, 100, 100);  //360 is like 360 degrees in a circle

   background(45, 50, 100);

  
  fill (180, 100, 23);
  noStroke();
  rectMode(CENTER);
  rect (width/2, height/2, 400, 400);
  
}