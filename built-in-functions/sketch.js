var posX, posY;
var spaceshipColor;

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  posX = width/2;
  posY = height/2;
  spaceshipColor = color(180);
}

function draw() {
  // put drawing code here

   background (255);
   drawSpaceShip(posX, posY);
}

function drawSpaceShip (posX, posY) {
  fill (spaceshipColor);
  beginShape ();
    vertex (posX-45, posY-45);
    vertex (posX+45, posY);
    vertex (posX-45, posY+45);
  endShape(CLOSE);
}

function keyTyped () {
  if (key === "w") {
    posY -=12;
   } else if (key === "a") {
     posX -=12;
   } else if (key === "s") {
     posY +=12;
  } else if (key === "d") {
    posX +=12;
  }
}

function mousePressed () {
   spaceshipColor = color(0, 0, 255);
}

function mouseReleased () {
  spaceshipColor = color(180);
}