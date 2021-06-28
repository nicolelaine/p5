//Dom Tutorial, positioning
//Author: Kevin Siwoff

var elements = [];


function setup() {
  // put setup code here


for (var i = 0; i < 10; i ++) {
    var h1 = createElement ('h1', 'I am an h1');
    h1.position (cos(map(i, 0, 10, 0, TWO_PI)) * 300 + windowWidth / 2, //x dimension
                (sin(map(i, 0, 10, 0, TWO_PI)) * 300 + windowHeight / 2)); //y dimension
            elements.push(h1);   
       }
}

function draw () {
    for (var i = 0; i < elements.length; i++) {
       elements[i].html(frameCount);
    }
}

//VERY IMPORTANT TO INCLUDE THIS
function windowResized () {
  resizeCanvas (windowWidth, windowHeight);
}