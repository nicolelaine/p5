var lyricline = "Thank you very much Mister Robot"
var words = [];
var stresses;

function setup() {
  // put setup code here

  createCanvas(400, 400);
  textSize (20);
  
  //get all the stresses as an array

  stresses = RiTa.getStresses(lyricline);
  words = RiTa.tokenize(lyricline);
}

function draw() {
  // put drawing code here

  background (255);
  translate (20, 20);
  var wordPos = 0;
  for (var i = 0; i < words.length; i++) {
   // text (words[i], wordPos, 0, textWidth(words))
    var stresses = RiTa.getStresses(words)
    text (words[i], wordPos, 20)
    text(stresses, wordPos, 45)
    wordPos += textWidth(words[i]);
  }
}