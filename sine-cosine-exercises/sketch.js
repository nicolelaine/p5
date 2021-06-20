//simple harmonic motion
var periodOne = 125;
var periodTwo = 90;
var angle = 0.0;
//var waveLengthOne = 125.0;
//var waveLengthTwo = 90.0;
var pointCount = 0;
var amplitude = 200;


function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
   noFill ();
   strokeWeight (1);
   stroke(100);
   translate (width / 2, height / 2);
   if (pointCount > 10000) {
    noLoop ();
   }

  beginShape ();
    for (var i = 0; i <pointCount; i++) {
      angle = i / periodOne * TWO_PI;
      //angle = i / waveLengthOne * TWO_PI;
      var x = sin (angle) * amplitude;
      angle = i / periodTwo * TWO_PI;
     // angle = i / waveLengthTwo * TWO_PI;
      var y = sin (angle) * amplitude;
      vertex (x, y);
    }
    endShape ();
     pointCount ++;
}