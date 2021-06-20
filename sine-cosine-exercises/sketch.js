//simple harmonic motion

var angle = 0.0;
var x = 0.0;
var period = 125;  //sets the speed of the object as it moves across the screen



function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here

   background (255);
   fill (0);
   text ("period: " + period, 175, 30);
   translate (width / 2, height / 2);
   var amplitude = width / 2;  //play with the amplitude
   var angle = frameCount / period * TWO_PI;  //as the period number gets smaller
   //it moves more quickly
   x = cos (angle) * amplitude;

   fill (245, 0, 123);
   rect (x, 0, 40, 40);
}