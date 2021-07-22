/*
* @name Video Cues
* @description <p> load a video and create a DOM element for it to play inside </p>
* <p><em><span class = "small"> To run this example locally, you will need the
* <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
* at least one video file, and a running <a href="http://github.com/processing/p5.js/wiki/Local-server"
>local server</a>.</span></em></p>
*/

var space;

function preload ();
space = createVideo (["media/anni003.mp4"]);  //video DOM element with an array inside with a string to where the video lives


function setup() {
  // put setup code here


  createCanvas(windowWidth, windowHeight);
  //specify multiple formats for different browsers
  //you can also create a backup video format in case mp4 does not work by putting it next in the array
  
  space.loop (); //set the video to loop 

  space.hide() //by default hides the DOM element
  //this makes it play inside of the canvas and not as a separate DOM element

  space.volume (0); //we set the volume to 0 as we don't want sound

  
}

function draw() {
  // put drawing code here

   background (150);
   tint (255, 0, 0); //this tints the video as if it were an image
   image (space, width / 2 - space.width / 2, height / 2 - space.height /2);
  
}