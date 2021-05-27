var numColumns = 10;
var colorFrom;
var colorTo;

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  colorMode (HSB, 360, 100, 100);
  noStroke ();
  colorFrom = color(0, 50, 100);
  colorTo = color(45, 80, 100);
}

function draw() {
  // put drawing code here

    
    for (var i = 0; i < numColumns; i++) {
      var interpValue = map(mouseX * (i* 0.25), 0, width, 0.0, 1.0);
      var colorHue = lerpColor (colorFrom, colorTo, interpValue);
      fill (colorHue, 100, 100);
      rect (i* width / numColumns, 0, width / numColumns, height);
    }
}
