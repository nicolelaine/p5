
var lexicon;

function setup() {
  // put setup code here

  createCanvas(400, 400);

  textSize (20);
  textAlign (CENTER);
  text ("Click for random word", width / 2, height / 2);

    //first create new Rilexicon - an instance of this object
    lexicon = new Rilexicon ();
}

function mousePressed () {
   background (255);
   var word = lexicon.random ();
   //get a random word from our lexicon object
   text (word, width/2, height/2);
}

function draw() {
  // put drawing code here
  
}