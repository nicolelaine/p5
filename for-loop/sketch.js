function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here

   fill (0);
   //we loop 10 times
   for (var i = 0; i < 10; i+=3) {
     rect (i*20, 0, 8, height/2);
   }
}