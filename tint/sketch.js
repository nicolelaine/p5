var img;
var bandHeight = 120;
var bandMisalign = 40;

function preload (); {
  img = loadImage ('Crimson_sunset.jpg');
  
}

function setup() {
  // put setup code here

  createCanvas(400, 400);
  for (var i = 0; i < img.height; i += bandHeight) {
        img.copy (img,  //copy is called on the image function itself
          0, i,   //x and y axis
          img.width.bandHeight,
          random(-bandMisalign, bandMisalign), i,
           img.width, img.height);
  }
    var heightResized = width * img.height / img.width;
    image(img, 0, 0, img.width, img.height, 0, 0, width, heightResized);
}

//because of the random, everyime you refresh, it will 
//generate a new image