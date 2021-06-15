function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode (CENTER);
}

function draw() {
  // put drawing code here

   background (23);

   translate (width/2, height/2);
   rotate (frameCount);  //built in variable that starts from zero and counts 
   rect (0, 0, 50, 100);

   //if you want to rotate an object around itself, you must translate before you rotate!
}