function setup() {
  // put setup code here

  createCanvas(400, 400);
  frameRate(5);
}

function draw() {
  // put drawing code here
  background(255);
  redCircle(random(100));
}

function redCircle(circleRadius) {
  fill ("red");
  ellipse (width/2, height/2, circleRadius*2, circleRadius*2);
}