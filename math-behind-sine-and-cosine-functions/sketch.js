

function setup() {
  // put setup code here

  createCanvas(400, 400);
  

}

function draw() {
  // put drawing code here

   background (255);
   var angle = 0.0;
   var x = 0.0;
   translate (0, height / 2);

     while (x < width) {
      var amplitude = height / 4; //play with the amplitude
      var y = sin (radians (angle)) * amplitude;
      fill (100);
      ellipse (x, y, 10, 10);
      x += 10.0;
       angle += 10.0;
     }
}