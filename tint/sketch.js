var img;
var pixelColor

function preload (); {
  img = loadImage ('assets/moonwalk.jpg');
  
}

function setup() {
  // put setup code here

  createCanvas(400, 400);
  noStroke();
  noLoop();
  }

function draw () {
  background (255);
  //var resizedHeight = img.height * width / img.width;  //also a part of the unaltered but resized image
  //image (img, 0, 0, img.width, img.height, 0, 0, width, resizedHeight); //this will be the unaltered image
  for (var x = 0; x < img.width; x+=20) {
    for (var y = 0; y < img.height; y +=20) {
      fill (img.get(x,y)); //the inside for loop
      ellipse (x + random (-2, 2), y + random (-2, 2), 20, 20); //we offset so that 
      //it does not just look like a grid.
      //this makes it look more interesting and natural
    }
  }
}
//this pulls out the pixels from the image and makes them large ellipses