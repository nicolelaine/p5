var x = [-20, 20];   


function setup() {
  // put setup code here

  createCanvas(240, 120);
  noStroke();

}

function draw() {
  // put drawing code here
  background(0);
  x[0] += 0.5;  //Increase the first element
  x[1] += 0.5;  //Increase the second element
  arc (x[0], 30, 40, 40, 0.52, 5.76);
  arc (x[1], 90, 40, 40, 0.52, 5.76);

}