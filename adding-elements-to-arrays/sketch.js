var mySecondArray = [];

function setup() {
  // put setup code here

  createCanvas(500, 500);

  print (mySecondArray);
  for (var i = 0; i < 5; i++) {
    mySecondArray[i] = i * 50;
  }
  
  print (mySecondArray);
}

function draw() {
  // put drawing code here

   background (255);
   noFill ();
   for (var i = 0; i < mySecondArray.length; i++) {
     ellipse (width / 2, height / 2, mySecondArray [i] + 50, mySecondArray [i] + 50);
     //print ("element value is" + myFirstArray[i]);
   }
}

