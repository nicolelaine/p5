function setup() {
  // put setup code here

  createCanvas(600, 500);
}

function draw() {
  // put drawing code here

    var x = 0;
    while (x < width) {
        ellipse (x, height / 2, 20, 20);
        x += 100;  //we control the number of loops here
    }
}