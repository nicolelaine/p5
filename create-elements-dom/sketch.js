//Dom Tutorial, positioning
//Author: Kevin Siwoff

var h1;

function setup() {
  // put setup code here


//we define h1 here
h1 = createElement ('h1', 'I am a moving h1 p5 element');

frameRate (1);

}

function draw () {
  //we need to use windowWidth as opposed to width
  //drawing to the canvas
  h1.position(random(windowWidth), random(windowHeight));
}

//VERY IMPORTANT TO INCLUDE THIS
function windowResized () {
  resizeCanvas (windowWidth, windowHeight);
}
