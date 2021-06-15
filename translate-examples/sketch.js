function setup() {
  // put setup code here

  createCanvas(400, 400);
  colorMode (HSB, 360, 100, 100);
}

function draw() {
  // put drawing code here

  background (200, 100, 30);
  
  fill (47, 76, 100);

  push ();
  translate (mouseX, mouseY);
  triangle (-40, 0, 40, 0, 0, -40);
  pop ();
  
  drawCoords ();
}

function drawCoords () {
    text (mouseX + ":" + mouseY, 20, height-45);
}