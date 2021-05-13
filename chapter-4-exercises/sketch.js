
var y = 100;  //y variable 
var d = 130;  //diameter variable

function setup() {
  // put setup code here

  createCanvas(480, 120);
}

function draw() {
  // put drawing code here

   background(204);
   ellipse (75, y, d, d); //left circle  //d and d as diamter is also width and heigh of this circle
   ellipse (175, y, d, d); //middle cirlce
   ellipse (275, y, d, d); //right circle

}