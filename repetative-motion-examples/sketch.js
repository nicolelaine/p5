var x = 0;


function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here

   background (220);
      translate (0, height/4);
       noStroke ();
       fill (255, 0, 0);
       rect (x, 0, 200, 200);
       x++
       x = x % width; //this has it always take the remainder of 
       //width and makes it come back to the beginning each time
}