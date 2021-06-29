var inputTextElement;  //placeholder for the dom element
var inputText = '';


function setup() {
  // put setup code here

  createCanvas(500, 500);

  inputTextElement = createInput ();
  inputTextElement.position (20, 20);
  inputTextElement.input(handleInput);  //custom callback function


}

function handleInput () {
  inputText = this.value (); //refers to the inputTextElement, which is an object
}



function keyPressed () {
  if (key === 't') {
    text (inputText, random(width), random(height));
  }
}

//function draw() {
  // put drawing code here

//}