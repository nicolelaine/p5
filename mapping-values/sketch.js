var table;
var aveTemperatureData = [];


function preload () {
  //this table is a comma separated value "csv"
  //amd the header is specifying the column labels
table = loadTable ("data/antarctica_weather_averages.csv", "csv", "header"); //this ignores the headers in the document
}

function setup() {
  // put setup code here

  createCanvas(400, 400);
  textSize (24);
  textAlign (CENTER);
  //taking the data presetation of the array and making it an object
  aveTemperatureData = table.getRow(2).arr; //average lows .arr makes it an array

  }


function draw () {
  background (255);
  fill (0);
  translate (0, height/2);
  beginShape ();
  for (var i = 2; i < aveTemperatureData.length - 3; i++) {
  var temp = aveTemperatureData[i] * 5;
  var x = width / (aveTemperatureData.length - 1) * i;
  vertex (x, -temp);
  fill (0); //makes the ellipses have fills
  ellipse (x, -temp, 10, 10);
  noFill ();  //makes sure that the rest of the shape is not filled
  }
  endShape ();
}