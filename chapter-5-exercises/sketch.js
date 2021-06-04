


function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here

  background (204);

  line (20, 20, 220, 100);
  if (touchIsDown) {
    line (220, 20, 20, 100);
  }
}