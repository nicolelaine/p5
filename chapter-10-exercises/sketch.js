var bug;
var x;
var y;
var diameter;
var speed;

function move ();
function display ();

var red, blue;


function setup() {
  // put setup code here

  createCanvas(480, 120);
  background (204);
  //Create object and pass in the parameters
  bug = new JitterBug (width / 2, height / 2, 20);
  red = new Train ("Red Line", 90); //Assign "Red Line" to the name 
  //variable for the red object" Assign 90 to the distance variable for the
  //red object.
  blue = new Train ("Blue Line", 120); //Assign "Blue Line" to the name 
  //variable for the blue object. Assign 120 to the distance variable for the
  //blue object.
}


function draw () {
  bug.move ();
  bug.display ();
}

function Train (tempName, tempDistance) {
  this.name = tempName;
  this.distance = tempDistance;
}

function JitterBug (tempX, tempY, tempDiamter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiamter;
  this.speed = 0.5;  //same for every instance

  this.move = function () {
    this.x += random (-this.speed, this.speed);
    this.y += randon (-this.speed, this.speed);
  };

  this.display = function () {
    ellipse (this.x, this.y, this,diameter, this.diameter);
  };
}

