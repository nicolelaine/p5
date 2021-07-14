var data = [
  2,
  3,
  6,
  1.2,
  4,
  4.5,
  5.5,
];

function setup() {
  // put setup code here

  createCanvas(400, 400);
  translate (0, height /2);
  for (var i = 0; i < data.length; i++) {
    //we map our data range
    var circleSize = map (data[i], 1.2, 6, 5, 45);
    translate (50, 0);
    //use the mapped value as width & height
    ellipse (0, 0, circleSize, circleSize);
  }
}

