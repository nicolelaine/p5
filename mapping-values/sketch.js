function setup() {
  // put setup code here

  createCanvas(400, 400);
  textAlign(CENTER);
}

function draw() {
  // put drawing code here

   background (255);
   var mappedMouse = map (mouseX, 0, width, 0, 1)
    text ("mapped Mouse X" +mappedMouse, width / 2, height / 2);
}