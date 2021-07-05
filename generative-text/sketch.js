var lyricline = "Thank you very much Mister Robot"


function setup() {
  // put setup code here

  createCanvas(400, 400);
  textSize (120);
  textAlign (CENTER);
}

function draw() {
  // put drawing code here

  background (255);
  
      text (lyricline, 0, height / 2, width, 20);

      text (RiTa.getWordCount(lyricline), height / 2, height / 2 + 45);
  
}