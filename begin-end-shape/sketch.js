function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  // put drawing code here
  
  background(255);
  fill (120, 45, 200);
   beginShape(); //we begin drawing our shape
    
for (var i = 0; i < 24; i++ ) {
      vertex(i * random(100), random(height));   //vertex gets and y postion
}
  endShape(CLOSE);
}