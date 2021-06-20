function setup() {
  // put setup code here

  createCanvas(400, 400);

}

function draw() {
  // put drawing code here

   background (255);
   var amplitude = height / 2; //play with the amplitude
   var y = sin (radians (frameCount)) * amplitude;
   translate (width / 2, height / 2)
   ellipse (0, y, 50, 50);
}