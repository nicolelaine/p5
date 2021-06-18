var time1 = 2000;
var time2 = 4000;
var x = 0;

function setup() {
  // put setup code here
   createCanvas (480, 120);
}

function draw() {
  // put drawing code here

 var currentTime = millis ();
 background (204);
    if (currentTime > time2) {
      x -= 2;
    }
    ellipse (x, 60, 90, 90);
}