var x1 = -20;
var x2 = 20;

function setup() {
  // put setup code here

  createCanvas(240, 120);
  noStroke();
}

function draw() {
  // put drawing code here

   background(0);
   x1 += 0.5;
   x2 += 0.5;
   arc (x1, 30, 40, 40, 0.52, 5.76);
   arc (x2, 90, 40, 40, 0.52, 5.76);

}