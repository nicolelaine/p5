function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background(255);
  noStroke();
  var redColor = color(255, 0, 0);
  fill (redColor);
  rect (0, 0, width/2, height/2);
 // print(green(redColor));  just to show the number of the color 
 //in the console

  var greenColor = color(0, 255, 0);
  fill (greenColor);
  rect (width/2, 0, width/2, height/2);

  var mixedColor = color(
    red(redColor) + red(greenColor), 
    green(redColor) + green(greenColor),
    blue (redColor) + blue(greenColor),
    );
  fill (mixedColor);
  rect (0, height/2, width, height/2);
}