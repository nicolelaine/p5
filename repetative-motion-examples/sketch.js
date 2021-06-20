//Based on nature of code Example 1.1
//bouncing ball with no vectors
//by Dan Shiffman. Modified by Kevin Siwoff
//Fall 2015

//[full] variabls for location and speed of

var y = 0;
var yspeed = 4.0;


function setup() {
  // put setup code here

  createCanvas(400, 400);
}

function draw() {
  // put drawing code here

  background (255);
  //Move the ball up and down
  y = y + yspeed;

  //Check for bouncing
  if ((y > height) || (y < 0)) {
      //multiplying reverses direction
        yspeed = yspeed * -1;
  }

  ellipse (width/2, y, 50, 50);
}