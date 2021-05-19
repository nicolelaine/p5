function setup() {
  // put setup code here

  createCanvas(700, 700);
}

function draw() {
  // put drawing code here

   background(255);
   var x = 0;
   //try playing around with beginShape()
   beginShape (LINES);
   while (x < width) {
       var y = 0;
           while (y < height) {
             vertex (x, y);
                y += 10; //increase y by 10 each loop
           }
                x += 10; //increase x by 10 each outer loop
   }
     endShape ();
}