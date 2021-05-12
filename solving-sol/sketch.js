function setup() {
  // put setup code here

  createCanvas(900, 600);
  strokeWeight(10);
}

function draw() {
    // put drawing code here

  background(200);

  //left set of rectangles
  fill (255);
 // line (20, 10, 500, 500);
  rect (90, 100, 140, 170);     //upper left
  rect (230, 100, 140, 170);    //upper right
  rect (90, 270, 140, 170);     //bottom left
  rect (230, 270, 140, 170);    //bottom right


  //vertical lines in the left set - uppper left

  line (112, 100, 112, 270);  //first vertical line
  line (135, 100, 135, 270);  //second vertical line
  line (160, 100, 160, 270);  //third vertical line
  line (185, 100, 185, 270);  //forth vertical line
  line (207, 100, 207, 270);  //fith vertical line

//horizontal lines in the left set - uppper right
  line (230, 120, 370, 120);  //first horizontal line
  line (230, 140, 370, 140);  //second horizontal line
  line (230, 162, 370, 162);  //third horizontal line
  line (230, 184, 370, 184);  //fourth horizontal line
  line (230, 207, 370, 207);  //fifth horizontal line
  line (230, 230, 370, 230);  //sixth horizontal line
  line (230, 250, 370, 250);  //seventh horizontal line

  //diagnoal lines in the left set - bottom left

  line (90, 310, 118, 270);  //first diagnoal line - from the top
  line (90, 343, 143, 270);  //second diagnoal line - from the top
  line (90, 375, 170, 270);  //third diagnoal line - from the top
  line (90, 410, 200, 270);  //fourth diagnoal line - from the top
  line (90, 440, 230, 270);  //fifth diagnoal line - from the top (the one in the middle)
  line (117, 440, 230, 302);  //sixth diagnoal line - from the top
  line (147, 440, 230, 340);  //seventh diagnoal line - from the top
  line (175, 440, 230, 375);   //eigth diagnoal line - from the top
  line (200, 440, 230, 405);    //ninth diagnoal line - from the top - the most bottom on

//diagonal lines in the left set - bottom right








 //right set of rectangles
 rect(499, 100, 140, 170);      //upper left
 rect (640, 100, 140, 170);     //upper right
 rect (499, 270, 140, 170);     //botom left
 rect (640, 270, 140, 170);     //bottom right
}
