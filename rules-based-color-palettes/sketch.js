
var numColumns = 3;
var colorRange = 45;
var h = 0;

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  colorMode (HSB, 360,100, 100);
  noStroke();
  noLoop();

}

function draw() {
  // put drawing code here
  
  for (var i = 0; i < numColumns; i++) {
    var randomHue = random(h - colorRange, h + colorRange)
    fill (randomHue,100, 100);
    rect (i* width / numColumns, 0, width / numColumns, height)
  }

}

function keyPressed () {
h =  random(360);
redraw();
}