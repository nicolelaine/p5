function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
   background (255);
   var x = 0;
   while (x < 20) {
       push ();
       
       translate (x * 20, height/2);
       scale (x);
       ellipse (0, 0, 10, 10);
       pop ();
       x++;
   }
   
}