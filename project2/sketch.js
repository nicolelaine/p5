function setup() {
  // put setup code here

  createCanvas(480, 120);


}

function draw() {
  // put drawing code here
  background(204);               //Light Gray
  fill(153);                    //Medium Gray
  ellipse(132, 82, 200, 200);   //Gray Circle
  noFill();                    //Turn off fill
  ellipse(226, -16, 200, 200);  //Outline circle with no fill
  noStrokefill();                 //Turn off stroke
  ellipse(268, 118, 200, 200)    //Doesn't draw!
    //How come it doesn't just draw a  circle with no border
    //around it? Hmmmmm....

}