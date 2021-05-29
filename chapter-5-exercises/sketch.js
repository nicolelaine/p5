


function setup() {
  // put setup code here

  createCanvas(240, 120);
  strokeWeight (30);
}

function draw() {
  // put drawing code here
background (204);
stroke(102);
line (40, 0, 70, height);

if (mouseIsPressed === true) {
  stroke(0);
}
   line (0, 70, width, 50);
}