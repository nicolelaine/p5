var gray = [];


function setup() {
  // put setup code here

  createCanvas(600, 500);
  for (var i = 0; i < width; i++) {
    gray[i] = random(0, 255);
  }
}

function draw() {
  // put drawing code here
  background(204);
  for (var i = 0; i < gray.length; i++) {
   stroke (gray[i]);
   line (i, 0, i, height);
  }
}