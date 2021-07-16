var table;
var columnData = [];

colors = [
  "#D100FF",
  "#7000FF",
  "#0900FF"
]
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
  columnData = table.getColumn ("MAY");

  }


function draw () {
  background (255);

  translate (width /2 - 10, height / 4);
  textAlign (CENTER);
  fill (0);
  text ("May temperatures", -width/2 +10, width, 24);
  noStroke ();
  //in this case we loop backward since -15 (very cold) is the "smallest" in the data set
  for (var i = columnData.length -2; i >= 0; i--) {
    var mappedData = map(columnData[i],
      min(columnData),
      max(columnData),
      100,
      10);
      fill (colors[i % colors.length]);
      rect (0, 0, 20, mappedData);
      fill (0);
      text (columnData[i], 35, mappedData);
  }
}