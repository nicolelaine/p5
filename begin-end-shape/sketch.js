function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here

   beginShape();
      vertex(12, 45);
      vertex(12, 90);
      vertex(random(100), 23);
      vertex(random(80), random(80));
  endShape();
}