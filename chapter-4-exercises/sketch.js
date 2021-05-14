

function setup() {
  // put setup code here

  createCanvas(480, 120);
}

function draw() {
  // put drawing code here

   background(0);

   for (var y = 32; y <= height; y +=8) {  
    for (var x = 12; x <= width-20; x+=15) {
     ellipse (x + y, y, 16 - y/10.0, 16 - y/ 10.0);
    }
  }
}