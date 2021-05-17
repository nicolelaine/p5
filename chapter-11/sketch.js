var bugs = [];

function setup() {
  // put setup code here

  createCanvas(600, 500);
    background(204);
  
  for (var i = 0; i < 33; i++) {
    var x = random(width);
    var y = random(height);
    var r = i + 2;
    bugs[i] = new JitterBug(x, y, r);
  }
}
function draw() {
  // put drawing code here
 
  for (var i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }


//Copy JitterBug constructor function here

function JitterBug(tempX, tempY, tempDiamter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter =tempDiamter;
  this.speed = 0.5; //same for every instance
}

//function move () {
 // x += random(-speed,speed);
 // y += random(-speed, speed);
//}

this.move = function() {
  this.x += random(-this.speed, this.speed);
  this.y += random(-this.speed, this.speed);
};
this.display = function();
 ellipse(this.x, this.y, this.diameter, this.diameter);
};
