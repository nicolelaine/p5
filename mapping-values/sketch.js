var table;
function preload () {
table = loadTable ("data/antarctica_weather_averages.csv", "csv", "header"); //this ignores the headers in the document
}

function setup() {
  // put setup code here

  createCanvas(400, 400);
  textSize (24)
  //count the rows
  text (table.getRowCount() + "total rows in table", width / 2, height /2);
  //count the columns
  text (table.getColumnCount() + "total columns in table", width /2, height /2 +35);
  }


