function setup() {
  // put setup code here

  createCanvas(400, 400);
  textSize (20);
  
  noFill ();
  stroke (2);
  rect (25, 25, 350, 350);

  noStroke ();
  fill (0);

  //gets the phonemes from a string of text
   var words = riTa.getPhonemes("Got me looking so crazy right now");
      text (words, 50, 50, 300, 100);

      //you could do words.length to show many many sounds (phonetic words) in in the words
}

function draw() {
  // put drawing code here
}