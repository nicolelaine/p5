function setup() {
  // put setup code here

  createCanvas(400, 400);
  background(100);
  textAlign(CENTER);
  text(sayHello("hi there, this is new text"), width/2, height/2);
}

function sayHello(greeting) {
  
 return greeting;
}