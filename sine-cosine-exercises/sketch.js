var angle = 0.0;


function setup() {
  // put setup code here

  createCanvas(400, 400);
}

function draw() {
  // put drawing code here

   //background (255);
   translate (width / 2, height /2);
   var amplitude = height / 4; //play with the altitude

   angle += 2.0;
   var x, y;
   y = sin (radians(angle)) * amplitude;
   // try adding an ofset to our angle here
   x = cos (radians(angle + 45))  * amplitude;
   fill (100);
   ellipse (x, y, 10, 10);
}