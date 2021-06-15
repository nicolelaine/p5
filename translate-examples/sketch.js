function setup() {
  // put setup code here

  createCanvas(400, 400);
}

function draw() {
  // put drawing code here

  background (220);
  noStroke ();  // no outline on each rectangle

  fill (255, 0, 0);
  rect (0, 0, width/2, height/2);
  
  translate (width/2, height/2);
  fill (0, 255, 0);
  rect (0, 0, width/2, height/2);
}