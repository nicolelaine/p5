/*
* @name Hello World Video
* @description <p> load a video and create a DOM element for it to play inside </p>
* <p><em><span class = "small"> To run this example locally, you will need the
* <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
* at least one video file, and a running <a href="http://github.com/processing/p5.js/wiki/Local-server"
>local server</a>.</span></em></p>
*/

var space;

function setup() {
  // put setup code here

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
}

function draw() {
  // put drawing code here

   background (0);
   text("current time is " + space.time(), 20, 32); //it's called space, as that's the variable in this case for the video. the numbers show it's location on screen
   text("video duration in seconds is " + space.duration(), 20, 64);
}