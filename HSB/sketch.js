function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
   colorMode(HSB, 360, 100, 100);  //360 is like 360 degrees in a circle

   for (var i = 0; i < 360; i+=10) {
     for (var j = 0; j < 100; j+=10) {
       noStroke();
       fill (i,j, 100);
       rect (i, j, 10, 10);
     }
   }
  

  //tweak the last example so that mouseX and mouseY
  //values change the saturation and brightness values
  //for both the square and the background. What does this 
  //look like on the HSB color cone?
}