function setup() {
  // put setup code here

  createCanvas(480, 120);
  strokeWeight(12);

}

function draw() {
  // put drawing code here
  background(204);
  strokeJoin(ROUND); //round the stoke corners
  rect(40, 25, 70, 70);
  strokeJoin(BEVEL) //bevel the stroke corners
  rect(140, 25, 70, 70);
  strokeCap(SQUARE) //square the line endings
  line(270, 25, 340, 95);
  strokeCap(ROUND) //round the line endings
  line(350, 25, 420, 95);

}