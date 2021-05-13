function setup() {
  // put setup code here

  createCanvas(900, 600);
  strokeWeight(10);
  

}

function draw() {
    // put drawing code here

  background(200);
  strokeCap(SQUARE);

  //left set of rectangles
  fill (255);  //set white color for rectangles

  
 stroke(0, 0, 0);  //set the rectanges and lines to be black

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

    line (260, 440, 230, 405);   //first diagnoal line - from the bottom (started at bottom of the rectangle and went up to the side towward the left)
    line (290, 440, 230, 375);   //second diagnoal line - from the bottom
    line (320, 440, 230, 342);    //third diagnoal line - from the bottom
    line (350, 440, 230, 304);    //fourth diagnoal line - from the bottom
    line (370, 433, 230, 273);  //middle line  - fifth diagnoal line - from the bottom
    line (370, 397, 260, 270);    //sixth diagnoal line - from the bottom
    line (370, 360, 290, 270);     //seventh diagnoal line - from the bottom
    line (370, 325, 320, 270);     //eigth diagnoal line - from the bottom
    line (370, 300, 345, 270);     //ninth diagnoal line - from the bottom


    //****************************************************************************************


    //right set of rectangles
  
    rect(499, 100, 140, 170);      //upper left
    rect (640, 100, 140, 170);     //upper right
    rect (499, 270, 140, 170);     //botom left
    rect (640, 270, 140, 170);     //bottom right



    //vertical lines in the right set - uppper left

  line (520, 100, 520, 270);  //first vertical line
  line (545, 100, 545, 270);  //second vertical line
  line (570, 100, 570, 270);  //third vertical line
  line (595, 100, 595, 270);  //fourth vertical line
  line (617, 100, 617, 270);  //fifth vertical line

  //horizontal lines in the right set - uppper right
  stroke(253, 214, 56);  //setting the yellow color
  line (645, 120, 775, 120);  //first horizontal line
  line (645, 140, 775, 140);  //second horizontal line
  line (645, 162, 775, 162);  //third horizontal line
  line (645, 184, 775, 184);  //fourth horizontal line
  line (645, 207, 775, 207);  //fifth horizontal line
  line (645, 230, 775, 230);  //sixth horizontal line
  line (645, 250, 775, 250);  //seventh horizontal line

  //diagnoal lines in the rigth set - bottom left
  stroke(255, 0, 0);   //setting the red color
  line (499, 300, 520, 272);  //first diagonal line from top, bottom to top
  line (499, 335, 550, 272);  //second diagonal line from top, bottom to top
  line (499, 365, 575, 272);  //third diagonal line from top, bottom to top
  line (499, 405, 605, 272);  //forth diagonal line from top, bottom to top
  line (499, 440, 635, 275);  //middle line - fith line from the top, bottom to top
  line (530, 440, 640, 305);    //sixth diagonal line from top, bottom to top
  line (560, 440, 640, 340);  //seventh diagonal line from top, bottom to top
  line (590, 440, 640, 380);  //eight diagonal line from top, bottom to top
  line (615, 440, 640, 410);  //ninth diagonal line from top, bottom to top


    //diagnoal lines in the rigth set - bottom right
    stroke (49, 180, 228);  //setting the blue color
    line (665, 440, 640, 410);    //first diagnoal line - from the bottom (started at bottom of the rectangle and went up to the side towward the left)
    line (692, 440, 640, 380);  //second diagnoal line - from the bottom
    line (720, 440, 640, 341);  //third diagnoal line - from the bottom
    line (750, 440, 640, 307);  //fourth diagnoal line - from the bottom
    line (780, 440, 640, 270);  //middle line - fifth diagnoal line - from the bottom
    line (780, 405, 670, 270);  //sixth diagnoal line - from the bottom
    line (780, 370, 700, 270);  //seventh diagnoal line - from the bottom
    line (780, 334, 727, 270);  //eight diagnoal line - from the bottom
    line (780, 305, 755, 270);  //ninth diagnoal line - from the bottom


      //this part is so the rectangles run again and hide the
      //end of the lines behind their lines
    noFill(0);
    stroke(0, 0, 0);
    rect(499, 100, 140, 170);      //upper left
    rect (640, 100, 140, 170);     //upper right
    rect (499, 270, 140, 170);     //botom left
    rect (640, 270, 140, 170);     //bottom right


}
