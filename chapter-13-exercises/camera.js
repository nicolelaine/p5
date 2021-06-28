var capture;

function setup() {
  // put setup code here

  createCanvas(480, 120);
  capture = createCapture ();
  capture.hide ();
}

function draw() {
  // put drawing code here

  var aspectRatio = capture.height / capture.width;
  var h = width * aspectRatio;
  image (capture, 0, 0, width, h);
  filter (INVERT);
}