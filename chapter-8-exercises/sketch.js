var angle = 0.0;

function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here

 var sinval = sin(angle);
 print (sinval);

 var gray = map(sinval, -1, 1, 0, 255);
 background (gray);
 angle += 0.1;
}