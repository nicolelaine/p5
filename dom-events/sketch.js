var btn;
var bg = "black";


function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  btn = createElement ('button', 'Click me');
  btn.position(20,20);
  btn.mousePressed (
    function () {  //does not have a name, makes it an anonymous function
      bg = color (random(255), random(255), random(255))
    }
  );
}

function draw() {
  // put drawing code here

  background (bg);
}