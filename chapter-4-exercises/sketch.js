

function setup() {
  // put setup code here

  createCanvas(600, 320);
  noStroke()
}

function draw() {
  // put drawing code here

   background(0);

   for (var y = 0; y <= height; y +=40) {  
   for (var x = 0; x <= width; x +=40 ) {
     fill (255, 140);
     ellipse (x, y, 40, 40);
   }
  }
}