/**
 * based on http://sciutoalex.github.io/p5-D3-cookbook/
 */

var table;

function preload () {
  //my table is a comma separate value "csv"
  //and has a header specifying the column labels
  table = loadTable("data/antarctica_weather_averages.csv", "csv", "header");
}

function setup() {
  // put setup code here
  var margin = 30;
  createCanvas(400, 400);
  var canvas = c.canvas;
  var ctx = canvas.getContext ('2d');
  push ();
  translate (margin, margin);

  var aveTemperatureData = subset(table.getRow(2).arr, 1, table.getRow(2).arr.length - 4);

  //this is a function stored in a variable
  var lineGenerator = d3.line()  //d3 is a global variable from the d3 library itself
    //once it's loaded, we can use all the methods of d3
    //d3 is a chainable API. that is why the dots happen before the x and y
    .x(function(data, index) {return map (index, 0,12, 0, width-margin*2); })  //these are callback functions
    .y(function(data, index) {return map (data, -24, 24, 0, height-margin*2); })  //the data and index are prebaked in d3js
    .curve (d3.curveCardinal);  //this is specific to d3js - it allows us to implement 
    //different interpolation curves between our points
    //the cardinal is a type of curve in d3js

    strokeWeight (3);
    stroke('#033E8C');
    var cPathLinear = new Path2D(lineGenerator(aveTemperatureData));  //path2D is a d3 object
    //that creates a set of points along a path using a line generator
    //in d3js a line represents many points that make up a line
    ctx.stroke(cPathLinear);
    //ctx is native javascript. it gets the canvas element and gets its context, which is
    //what world we are drawing it in

    //p5 drawing only
  //  beginShape ();
  //  for (var i =0; i < aveTemperatureData.length; i++) {
  //    curveVertex (map(i, 0, 12, 0, width-margin*2), map(aveTemperatureData[i], -24, 24, 0, height-margin*2));
  //  }
  //  endShape ();
//}

//curves are very complex operations in drawing
//if you want to find tune tune your detail, it helps to work with a library like d3js

function draw() {
  // put drawing code here

   if(mouseIsPressed) {
    fill(0);
      } else {
        fill(255);
      }
      ellipse(mouseX, mouseY, 80, 80);
}