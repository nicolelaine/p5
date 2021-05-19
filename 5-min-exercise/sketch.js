//Create a set of 100 shapes
//Use the for loop to position the shapes on your page


var rects = 3000;

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  background(204);
 
}

function draw() {
  // put drawing code here

  fill (0);
  for (var i = 0; i <= rects; i+=30) {
      rect (i, 20, 10, 10);
  }
}