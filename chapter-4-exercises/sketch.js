
//using width and heigh, which are set above in the createCanvas
//helps us to move items around the exact canvas size
//even if the canvas ends up changing size
//which saves us tons of work in the end!

function setup() {
  // put setup code here

  createCanvas(500, 200);
}

function draw() {
  // put drawing code here

   background(204);
  
  line (0, 0, width, height); //line from (0,0) to (480, 120)
  line (width, 0, 0, height);  //line from (480, 0) to (0, 120)
  ellipse (width/2, height/2, 60, 60);

}