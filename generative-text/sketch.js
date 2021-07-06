
var lines;

function preLoad () {
   lines = loadStrings('assets/The Problems of Philosphy.txt')  //you need to have this file in your folder!
    //it will add all the text in this document in an array of lines
  }

function setup() {
  // put setup code here

  createCanvas(400, 400);
  text (lines.join(' '), 0, 0, width, height); //the joins puts the lines together
}



//function draw() {
  // put drawing code here
  
//}