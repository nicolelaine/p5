var myFirstArray = [];

function setup() {
  // put setup code here

  createCanvas(500, 500);
  colorMode (HSB, 360, 100, 100, 100);
 
  for (var i = 0; i < 5; i++) {
    myFirstArray.push(random(100));
  }
  rectMode (CENTER);
  print (myFirstArray);
}

function draw() {
  // put drawing code here

   background (0, 0, 100);
   for (var i = 0; i < myFirstArray.length; i++) {
     fill (0, 100, 100, 0.4);
     rect (width / 2, height / 2, myFirstArray [i] * 10, myFirstArray [i] * 10);
     //print ("element value is" + myFirstArray[i]);
   }
}

function mousePressed () {

}