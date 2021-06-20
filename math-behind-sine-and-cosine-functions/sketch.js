function setup() {
  // put setup code here

  createCanvas(480, 120);
  frameRate (10);
}

function draw() {
  // put drawing code here

   background (255);
   var val = sin (radians(frameCount));
   print (val);

   //shows values by negative 1 and 1
}