var table;



function preload () {
  //this table is a comma separated value "csv"
  //amd the header is specifying the column labels
table = loadTable ("data/antarctica_weather_averages.csv", "csv", "header"); //this ignores the headers in the document
}

function setup() {
  // put setup code here

  createCanvas(600, 200);
  textSize (8);
  }


function draw () {
  background (255);
  translate (20, 20);
  //c stands for column
  //r stands for row
  for (var c = 0; c < table.getColumnCount(); c++) {
    for (var r = 0; r < table.getRowCount(); r++) {
      push ();
      if (c === 0) {
        translate (0, r * 20);
      } else {
        translate (c * 25 + 150, r * 20);
      }
      var data = table.getString(r, c);
      text (data, 0, 0);
      pop ();
    }
  }
}