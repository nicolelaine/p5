

function setup() {
  // put setup code here

  createCanvas(480, 120);
  strokeWeight(2);
}

function draw() {
  // put drawing code here

   background(204);

   for (var i = 20; i < 400; i +=20) {  
     line (i, 0, i + i/2, 80);
     line (i + i/2, 80, i*1.2, 120);
   }

}