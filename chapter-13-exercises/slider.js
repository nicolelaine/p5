var slider;


function setup() {
  // put setup code here

  createCanvas(480, 120);
  slider = createSlider (0, 255, 100);
  slider.position (20, 20);
}

function draw() {
  // put drawing code here

  var gray = slider.value ();
  background (gray);
}