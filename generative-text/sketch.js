//Couplet by Ezra Pound

var couplet = "Drawing a sword, cut into water, water again flow: Raise cup, quench sorrow again sorry."

var words = [];
var partOfSpeech = [];


function setup() {
  // put setup code here

  createCanvas(400, 400);
  textSize (12);
  words = RiTa.tokenize(couplet);
  partOfSpeech = RiTa.getPosTags(words); //parts of speech tags
  
  //get all the stresses as an array

  stresses = RiTa.getStresses(lyricline);
  words = RiTa.tokenize(lyricline);
}

function draw() {
  // put drawing code here

  background (255);
  translate (10, 10);
  var wordPosX = 0;
  var wordPosY = width / 4;

  for (var i = 0; i < words.length; i++) {
    text (words[i], wordPosX, wordPosY, textWidth(words[i]), 20);
    text (partOfSpeech[i], wordPosX, wordPosY + 20);
    wordPosX += textWidth(words[i]) + 16; //gives some space in between the words
       if (wordPosX > width) {
         wordPosX = 0;
         wordPosY += 35;  // the 35 gives some space in between the words
       }
  }
}