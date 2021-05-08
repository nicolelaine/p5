function setup() {
  // put setup code here

  createCanvas(480, 120);
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here

  background(204);
  arc(90, 60, 80, 80, 0, 90);
  arc(190, 60, 80, 80, 0, 270);
  arc(290, 60, 80, 80, 180, 450);
  arc(390, 60, 80, 80, 45, 225);
}