//CODE DEPENDENCY: P5.Play Library

var ballerina;

function preload () {
  //create an annimation from a sequence of numbered images
  //pass the first and last file name and it will try to find the ones in between
  ballerina = loadAnimation ("assets/out-00000.png", assets/out-00012.png); //first and last image
}

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here

   //specify the animation instance and it's x,y postion
   //animation () will update the animation frame as well
   animation (ballerina, width/2, height/2);
}