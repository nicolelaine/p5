var img;

function preload () {
  img = loadImage ("lunar.jpg");  
}

function setup() {
  // put setup code here

  createCanvas(480, 120);
}

function draw() {
  // put drawing code here

   image (img, 0, 0);
}