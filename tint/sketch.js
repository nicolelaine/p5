
var bgImg;
var elvisImg;
var numElvises = 5;

function preload (); {
  imgBg = loadImage ('Blue_sky_south_of_France.png');
  elvisImg = loadImage ('elvis-flaming-star.png');
}

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background (bgImg);

   //try different tints and repetition patterns
   tint (i*20, 100, 0, 150);
   for (var i = 0; i < numElvises; i++) {
     tint (i*20, i*20, 0, 150);
     image (elvisImg, i*20, 0, elvisImg.width/2, elvisImg.height/2);
   }
}