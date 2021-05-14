

function setup() {
  // put setup code here

  createCanvas(480, 120);
  strokeWeight(8);
}

function draw() {
  // put drawing code here

   background(204);
  //code that is not in a for loop
  //line (20, 40, 80, 80);
  //line (80, 40, 140, 80);
  //line (140, 40, 200, 80);
  //line (200, 40, 260, 80);
  //line (260, 40, 320, 80);
  //line (320, 40, 380, 80);
  //line (380, 40, 440, 80);

  //code that is in a for loop
   for (var i = 20; i < 400; i +=60) {  //as long as the final number that happens after 60 is added to i, this loop will run
     line (i, 40, i + 60, 80);
   }
}