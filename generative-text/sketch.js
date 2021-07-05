function setup() {
  // put setup code here

  createCanvas(400, 400);
  textSize (20);
  
  var word = "huge";
  var wordWidth = textWidth (word);  //this gives us the number of pixels the word is
  text (word, 50, 50, wordWidth, 100);  //where the text is placed
  rect (50, 70, wordWidth, wordWidth);  //a rectangle for under the word to show its size below it


  var wordTwo = "huuuuuge";
  var wordTwoWidth = textWidth (wordTwo);
  text (wordTwo, 100 + wordWidth, 50, wordTwoWidth, 20);
  rect (100 + wordWidth, 70, wordTwoWidth, wordTwoWidth);

  var wordThree = "huuuuuuuuuuuuuuuuge";
  var wordThreeWidth = textWidth (wordThree);
  text (wordThree, 150 + wordTwoWidth, 50, wordThreeWidth, 20);
  rect (150 + wordTwoWidth, 70, wordThreeWidth, wordThreeWidth);
}

function draw() {
  // put drawing code here
}