var myThirdArray = [
  "apple",
  "orange",
  "banana",
  "peach"
];

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
       text (myThirdArray[ myThirdArray.length - 1], width / 2, height / 2);
}

function mousePressed () {
   shorten (myThirdArray);
}