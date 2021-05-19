function setup() {
  // put setup code here

  createCanvas(700, 700);
}

function draw() {
  // put drawing code here

  background (204);
    //first loop across the x-axis
    for (var x = 0; x < 100; x++) {
      //and also across the y-axis
         for (var y = 0; y < 400; y++) {
          fill(random(255), random(255), random(255));
           ellipse (x*10, y*10, 40, 40);
         }
    }
}