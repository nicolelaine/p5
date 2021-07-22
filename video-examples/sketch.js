/*
* @name Video Cues
* @description <p> load a video and create a DOM element for it to play inside </p>
* <p><em><span class = "small"> To run this example locally, you will need the
* <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
* at least one video file, and a running <a href="http://github.com/processing/p5.js/wiki/Local-server"
>local server</a>.</span></em></p>
*/

var space;
var bgColor;
var isMakeBubble = false;
var bubblePos;

function setup() {
  // put setup code here
  bgColor = color(255, 255, 255);

  createCanvas(windowWidth, windowHeight);
  //specify multiple formats for different browsers
  //you can also create a backup video format in case mp4 does not work by putting it next in the array
  space = createVideo (["media/anni003.mp4"]);  //video DOM element with an array inside with a string to where the video lives
  space.loop (); //set the video to loop 
  space.volume (); //we set the volume to 0 to mute it

  space.showControls (true);
  //a centered video element
  space.postion (width/2 - space.width/2, height / 2 - space.height/2);

  textSize (32);

  space.addCue(3.0, changeBgColor);
  space.addCue(4.0, triggerBubble, random(height));
}

function draw() {
  // put drawing code here

   background (0);
   text("current time is " + space.time(), 20, 32); //it's called space, as that's the variable in this case for the video. the numbers show it's location on screen
   text("video duration in seconds is " + space.duration(), 20, 64);

   if (isMakeBubble) { //we don't need to say true, since if it is, it will run the code
          if(bubblePos < 0) {
            isMakeBubble = false;
          }
      else {
        ellipse(width/2, bubblePos, 20, 20);
        bubblePos--;
      }
   }
}

function changeBgColor () {
  bgColor = color(0, 255, 0);
}

function triggerBubble (posY) { //position Y
    isMakeBubble = true;
    bubblePos = posY;
}