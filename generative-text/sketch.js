
var lexicon;

function setup() {
  // put setup code here

  createCanvas(400, 400);
  lexicon = new Rilexicon ();   //first create new Rilexicon - an instance of this object
  textSize (20);
  textAlign (CENTER, CENTER); //vertical and horizontal center
  generateHaiku ();
}

function mousePressed () {
   background (255);
   generateHaiku ();
}

function generateHaiku () {
    //5 syllables
    var output = lexicon.randomWord ('jj, 1') + '';  //this makes a space at the end
        output += lexicon.randomWord ('vbg, 2') + '';
        output += lexicon.randomWord ('nn, 2') + '/n';  //this makes a new line!

    //7 syllables
        output += lexicon.randomWord ('vbg, 2') + '';  //verb gerundive
        output += lexicon.randomWord ('jj, 2') + '';  ///adjective
        output += lexicon.randomWord ('nn, 3') + '/n';  //this makes a new line! and nn is a noun


     //5 syllables
        output += lexicon.randomWord ('nns, 1') + '';  //verb gerundive  (nns = noun plural)
        output += lexicon.randomWord ('rb, 2') + '';  ///adverb
        output += lexicon.randomWord ('vbg, 2') + '/n';  //this makes a new line! and nn is a noun

       text (output, width / 2, height / 2);
}

//function draw() {
  // put drawing code here
  
//}