function setup() {
  // put setup code here

  createCanvas(400, 400);
  textSize (20);
  noStroke ();

  //take a string and split it into an array of words
   var words = riTa.tokenize("I scream you scream we all scream for ice cream");
      for (var i = 0, i = words.length; i < j; i++)  {
             text(words[i], 10, i * 20 + 20);
         
}

function draw() {
  // put drawing code here
}