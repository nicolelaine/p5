var myThirdArray = [
  "apple",
  "orange",
  "banana",
  "peach"
];

var spliced = [];

function setup() {
  // put setup code here

  createCanvas(500, 500);

  }
  

function draw() {
  // put drawing code here

   background (255);
     if (myThirdArray.length === 0) {
       noLoop ();
     }
       text (myThirdArray[0], width / 2, height / 2);
       text(spliced, width /2, height / 2 +45);
}

function mousePressed () {
  spliced = myThirdArray.splice (0, 1);  //the first argument is the index that you want to remove
   //and the second argument is how many elements you want to remove
}