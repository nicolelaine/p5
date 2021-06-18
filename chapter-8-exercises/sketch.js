var startX = 50; //Initial x coordinate
var stopX = 10; //Final y\x coordinate
var startY = 10;  //Initial y coodinate
var stopY = 80;  //Final y coordinate
var x = startX;  //Current x coordinate
var y = startY;  //Current y coordinate
var step = 0.005; //createCanvas of each step (0.0 to 1.0)
var pct = 0.0; //Percentage traveled 0.0 to 1.0

function setup() {
  // put setup code here


  createCanvas (240, 120);
 
}

function draw() {
  // put drawing code here

 background (0); {
   x = startX + ((stopX - startX) * pct);
   y = startY + ((stopY - startX) * pct);
   pct +=step;
 }
  ellipse (x, y, 20, 20);
}