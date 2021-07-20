var img;

function preload (); {
  img = loadImage ('Titian_Venus_of_Urbino.png');
  
}

function setup() {
  // put setup code here

  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  background (255);
  var resizedHeight = img.height * width / img.widht;
 
  image (img, 0, 0, img.width, img.height, 0, 0, width, resizedHeight);

  filter (THRESHOLD, map(mouseX, 0, width, 0, 1));
  filter (POSTERIZE, map(mouseX, 0, width, 2, 5)); //posterize is most strong between 2 and 5
  filter (INVERT); //makes it look like a film negative
  filter (GRAY); //make a black and white image
   }
