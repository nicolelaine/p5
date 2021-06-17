function setup() {
  // put setup code here

  //frameRate(30); //thirty frames each second
 // frameRate(12); //twelve frames each second
 // frameRate(2); //two frames each second
  frameRate(0.5);  //one frame every two seconds
}

function draw() {
  // put drawing code here

   var fr = frameRate ();
   print (fr);
}