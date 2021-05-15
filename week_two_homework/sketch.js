//714 divided by 3 is 238
//476 is 1/3 of the largest square

var xRed = 66;
var a = 238;

var artist = "Ellsworth Kelly";
var work = "Red Yellow Blue";
var date = "2000";
var style = "Hard Edge Style";
var genre = "Abstract";

function setup() {
  createCanvas(840, 714);
	print(artist);
	print(work);
	print(date);
	print(style);
	print(genre);
     background(220);
		 noStroke();
}

function draw() {
  
  fill (138, 178, 227); //Blue color
  rect (xRed, height - a*3, a*3, a*3);  //Blue square
  
  fill (235, 225, 52);  //Yellow color
  rect (xRed, height - a*2, a*2); //Yellow square
  
  fill (255, 83, 26);  //Red color
  rect (xRed, height -a, a, a);  //Red square
}