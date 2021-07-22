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
  space = createVideo (["media/anni003.mp4"]);
  space.loop (); //set the video to loop and 
  space.volume (); //we set the volume to 0 to

  space.showControls ();
  //a centered video element
  space.postion (windowWidth/2 - (space.width/2))
}

function draw() {
  // put drawing code here

   background (0);
}