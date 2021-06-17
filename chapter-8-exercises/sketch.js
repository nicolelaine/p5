var radius = 40;
var x = 110;
var speed = 0.5;
var direction = 1

function setup() {
  // put setup code here

  createCanvas (240, 120);
  ellipseMode (RADIUS);
}

function draw() {
  // put drawing code here

  background (0);
  x += speed * direction; 

  if ((x > width - radius) || (x < radius))  {  
     direction = -direction;  //flip direction
  }

  if (direction === 1) {
    arc (x, 60, radius, radius, 0.52, 5.76); //face right
  } else {
    arc (x, 60, radius, radius, 3.67, 8.9); //face left
  }
}