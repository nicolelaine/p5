function setup() {
  // put setup code here

  createCanvas(480, 120);

}

function draw() {
  // put drawing code here

  background(204);
  ellipse(140, 0, 190, 190);
  //the rectangle comes after the ellipse
  //because it comes after it in the code
  rect(160, 30, 260, 20);
}